package genchev.hristian.automatictestevaluation.services;

import com.google.zxing.*;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.sun.jersey.core.header.FormDataContentDisposition;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.MatOfByte;
import org.opencv.imgcodecs.Imgcodecs;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.HashMap;
import java.util.Map;

public class ImageService {
    public void uploadImage(InputStream inputStream, FormDataContentDisposition fileDetail) throws Exception {
        byte bytes[] = streamToByteArray(inputStream, fileDetail);
        System.out.println("size: " + bytes.length);
        Mat src = Imgcodecs.imdecode(new MatOfByte(bytes), Imgcodecs.CV_LOAD_IMAGE_UNCHANGED);
        BufferedImage bf = Mat2BufferedImage(src);
        readQr(bf);
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

    public static void readQr(BufferedImage bf) throws NotFoundException, IOException {
        String charset = "UTF-8"; // or "ISO-8859-1"
        Map hintMap = new HashMap();
        hintMap.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);

        System.out.println("Data read from QR Code: "
                + readQRCode(bf, charset, hintMap));
    }

    static BufferedImage Mat2BufferedImage(Mat matrix) throws Exception {
        MatOfByte mob = new MatOfByte();
        Imgcodecs.imencode(".jpg", matrix, mob);
        byte ba[] = mob.toArray();

        BufferedImage bi = ImageIO.read(new ByteArrayInputStream(ba));
        return bi;
    }
}
