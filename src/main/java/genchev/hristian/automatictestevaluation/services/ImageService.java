package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.comparators.ImageRowComparator;

import com.google.zxing.*;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.sun.jersey.core.header.FormDataContentDisposition;

import genchev.hristian.automatictestevaluation.models.Answer;
import genchev.hristian.automatictestevaluation.models.Blank;
import genchev.hristian.automatictestevaluation.models.ResultAnswer;
import genchev.hristian.automatictestevaluation.repository.ResultRepository;
import org.opencv.core.*;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;
import sun.awt.image.ImageAccessException;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.*;

public class ImageService {

    private BlankServiceImpl blankServiceImpl;

    private ResultRepository resultRepository;

    @Inject
    public ImageService(BlankServiceImpl blankServiceImpl, ResultRepository resultRepository) {
        this.blankServiceImpl = blankServiceImpl;
        this.resultRepository = resultRepository;
    }

    public void StreamRec(InputStream inputStream, FormDataContentDisposition fileDetail) throws Exception {
        byte bytes[] = streamToByteArray(inputStream, fileDetail);
        uploadImage(bytes);
    }

    public void uploadImage(byte bytes[]) throws Exception {
//        byte bytes[] = streamToByteArray(inputStream, fileDetail);
        Mat src = Imgcodecs.imdecode(new MatOfByte(bytes), Imgcodecs.CV_LOAD_IMAGE_UNCHANGED);
        Core.rotate(src, src, Core.ROTATE_90_CLOCKWISE); //ROTATE_180 or ROTATE_90_COUNTERCLOCKWISE
        BufferedImage bf = Mat2BufferedImage(src);
        String qrValue = "";
        try {
            qrValue = readQr(bf);
        } catch (Exception ex) {
            return;
        }

        String[] qrValuesArray = qrValue.split("-");

        Integer studentId = 0, blankId = 0;

        if (qrValuesArray != null && qrValuesArray.length == 2) {
            studentId = Integer.valueOf(qrValuesArray[0]);
            blankId = Integer.valueOf(qrValuesArray[1]);
        } else {
            return;
        }

        if (src.empty()) {
            throw new ImageAccessException("cannot convert to mat");
        }

        Blank blank = blankServiceImpl.getBlankById(blankId);

        Mat colorsub = getBlankAndWhite(src.clone());

        Mat gray = new Mat();
        Imgproc.cvtColor(src, gray, Imgproc.COLOR_BGR2GRAY);

        Imgproc.medianBlur(gray, gray, 5);

        Mat circles = new Mat();
        Imgproc.HoughCircles(gray, circles, Imgproc.HOUGH_GRADIENT, 1.0,
                (double) gray.rows() / 128, // change this value to detect circles with different distances to each other
                100.0, 30.0, 20, 70); // change the last two parameters
        // (min_radius & max_radius) to detect larger circles

        List<Point> orderedPoints = getAllRowsOrdered(circles, blank.getNumberOfAnswers());

        System.out.println("ordered points" + orderedPoints.size());

        List<Boolean> marked = new ArrayList<>();
        for (Point orderedPoint : orderedPoints) {
            double[] res = colorsub.get((int) orderedPoint.y, (int) orderedPoint.x);
            if (res[0] == 0) {
                marked.add(true);
            } else {
                marked.add(false);
            }
        }

        Integer blankSize = getBlankSize(blank);
        Integer offset = 0;

        if (blankSize != orderedPoints.size()) {
            System.out.println("different blank size");
            return;
        }

        genchev.hristian.automatictestevaluation.models.Result result =
                new genchev.hristian.automatictestevaluation.models.Result();

        List<ResultAnswer> resultAnswers = new ArrayList<>();
        Integer index = 1;
        Integer numberOfCorrect = 0;


        for (Answer answer : blank.getAnswers()) {
            boolean multiChosen = false;
            ResultAnswer resultAnswer = new ResultAnswer();
            if (marked.get(offset + answer.getRightAnswer())) {
                for (int i = offset; i < offset + answer.getOptions(); i++) {
                    if (marked.get(i) && i != offset + answer.getRightAnswer()) {
                        /*in case there is more than one chosen option*/
                        multiChosen = true;
                        break;
                    }
                }

                if (multiChosen) {
                    resultAnswer.setCorrect(false);
                } else {
                    numberOfCorrect++;
                    resultAnswer.setCorrect(true);
                }
            } else {
                resultAnswer.setCorrect(false);
            }

            resultAnswer.setIndex(index);

            resultAnswers.add(resultAnswer);

            offset += answer.getOptions();
            index++;
        }

        Double mark = 2.0 + (((double) numberOfCorrect / (double) blank.getNumberOfAnswers() * 4));
        System.out.println(mark);

        result.setAnswers(resultAnswers);
        result.setMark(mark);
        result.setBlankId(blankId);
        result.setStudentId(studentId);

        resultRepository.insert(result);
    }

    private Integer getBlankSize(Blank blank) {
        Integer result = 0;
        for (Answer answer : blank.getAnswers()) {
            result += answer.getOptions();
        }

        return result;
    }

    public Mat getBlankAndWhite(Mat colorsub) {

        /*
        * The next part of code is taken from: http://answers.opencv.org/question/24578/select-only-gray-pixels-in-color-image/
        * */

        byte[] data = new byte[3];
        byte[] black = new byte[]{0, 0, 0};
        byte[] white = new byte[]{-1, -1, -1};

        // iterate over the image
        for (int y = 0; y < colorsub.height(); y++) {
            for (int x = 0; x < colorsub.width(); x++) {

                // extract color component values as unsigned integers (byte is a signed type in java)
                colorsub.get(y, x, data);
                int r = data[0] & 0xff;
                int g = data[1] & 0xff;
                int b = data[2] & 0xff;

                // do simple threshold first
                int thresh = 100;
                if (r > thresh || g > thresh || b > thresh) {
                    colorsub.put(y, x, white);
                    continue;
                }

                // adjust the blue component
                b = (int) (b * 1.3);

                // quantification of color component's values distribution
                int mean = (r + g + b) / 3;
                int diffr = Math.abs(mean - r);
                int diffg = Math.abs(mean - g);
                int diffb = Math.abs(mean - b);

                int maxdev = 80;

                if ((diffr + diffg + diffb) > maxdev)
                    colorsub.put(y, x, white);
                else
                    colorsub.put(y, x, black);
            }
        }

        return colorsub;
    }

    public static List<Point> getAllRowsOrdered(Mat circles, Integer numberOfAnswers) {
        List<Point> allOrdered = new ArrayList<>();

        Point top = determineTop(circles);

        double rad = circles.get(0, 0)[2];

        /*трябва да намерим следващия най-ляв и най-десен У от следващия ред*/
        for (int i = 0; i < numberOfAnswers; i++) {
            allOrdered.addAll(orderRow(new Point(top.x, top.y - rad * 3 / 4), new Point(top.x, top.y + rad * 3 / 4), circles));
            /*трябва дасе намери следващите по големина*/
            for (int x = 0; x < circles.cols(); x++) {
                double[] c = circles.get(0, x);
                Point center = new Point(c[0], c[1]);
                double radius = c[2];

                if (center.y >= top.y + (2 * radius) && center.y <= top.y + (4 * radius)) {
                    top = center.clone();
                    break;
                }
            }
        }

        return allOrdered;
    }

    private static List<Point> orderRow(Point left, Point right, Mat circles) {
        double smallerY = left.y;
        double biggerY = right.y;

        List<Point> pointsOnRow = new ArrayList<>();

        if (left.y >= right.y) {
            smallerY = right.y;
            biggerY = left.y;
        }

        for (int x = 0; x < circles.cols(); x++) {
            double[] c = circles.get(0, x);
            Point center = new Point(c[0], c[1]);
            double radius = c[2] / 2;
            if (center.y >= (smallerY - radius) && center.y <= (biggerY + radius)) {
                pointsOnRow.add(center.clone());
            }
        }

        pointsOnRow = sortRow(pointsOnRow);

        return pointsOnRow;
    }

    public static List<Point> sortRow(List<Point> input) {
        Collections.sort(input, new ImageRowComparator());
        return input;
    }

    public static Point determineTop(Mat circles) {
        Point result = null;
        for (int x = 0; x < circles.cols(); x++) {

            double[] c = circles.get(0, x);

            Point center = new Point(Math.round(c[0]), Math.round(c[1]));

            if (result == null || center.y <= result.y) {
                result = center.clone();
            }
        }
        return result;
    }

    public byte[] streamToByteArray(InputStream inputStream, FormDataContentDisposition fileDetail) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buf = new byte[4096];
        while(true) {
          int n = inputStream.read(buf);
          if( n < 0 ) break;
          baos.write(buf, 0, n);
        }

        return baos.toByteArray();
    }

    public static String readQRCode(BufferedImage bf, String charset, Map hintMap)
            throws FileNotFoundException, IOException, NotFoundException {
        BinaryBitmap binaryBitmap = new BinaryBitmap(new HybridBinarizer(
                new BufferedImageLuminanceSource(
                        bf)));
        Result qrCodeResult = new MultiFormatReader().decode(binaryBitmap,
                hintMap);
        return qrCodeResult.getText();
    }

    public static String readQr(BufferedImage bf) throws NotFoundException, IOException {
        String charset = "UTF-8"; // or "ISO-8859-1"
        Map hintMap = new HashMap();
        hintMap.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);

        return readQRCode(bf, charset, hintMap);
    }

    static BufferedImage Mat2BufferedImage(Mat matrix) throws Exception {
        MatOfByte mob = new MatOfByte();
        Imgcodecs.imencode(".jpg", matrix, mob);
        byte ba[] = mob.toArray();

        BufferedImage bi = ImageIO.read(new ByteArrayInputStream(ba));
        return bi;
    }
}
