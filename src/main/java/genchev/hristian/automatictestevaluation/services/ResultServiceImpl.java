package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.OutputModels.ClassMarks;
import genchev.hristian.automatictestevaluation.OutputModels.StudentMark;
import genchev.hristian.automatictestevaluation.models.*;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.repository.ResultRepository;
import genchev.hristian.automatictestevaluation.repository.StudentRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ResultServiceImpl implements ResultService {

    private ResultRepository resultRepository;

    private StudentRepository studentRepository;

    private UserServiceImpl userService;

    @Inject
    public ResultServiceImpl(ResultRepository resultRepository, StudentRepository studentRepository, UserServiceImpl userService) {
        this.resultRepository = resultRepository;
        this.studentRepository = studentRepository;
        this.userService = userService;
    }

    @Override
    public Result getStudentResult(Integer blankId, Integer studentId) {
        return resultRepository.getStudentResult(blankId, studentId);
    }

    @Override
    public List<StudentMark> getBlankResult(Integer blankId) {
        List<StudentMark> studentMarks = new ArrayList<>();
        List<Result> results = resultRepository.getBlankResult(blankId);
        for (Result result : results) {
            Student tempStudent = studentRepository.getStudentByHisId(result.getStudentId());
            studentMarks.add(new StudentMark(tempStudent.getFirstName(), result.getMark()));
        }
        return studentMarks;
    }

    @Override
    public BlankMarks getBlankMarks(Integer blankId) {
        return resultRepository.getBlankmarks(blankId);
    }

    public List<BlankMarks> getClassMarks(Integer classId) {
        return null;
    }

    public List<ClassMarks> getClassesMarks(String email) {
        User user = userService.getUserByEmail(email);
        List<ClassMarks> classMarks = new ArrayList<>();
        List<Class> classes = user.getClasses();

        for (Class aClass : classes) {
            List<Blank> classBlanks = aClass.getBlanks();
            List<Double> blanksMarks = new ArrayList<>();

            for (Blank classBlank : classBlanks) {
                blanksMarks.add(resultRepository.getAverageMarkFromBlank(classBlank.getId()));
            }

            classMarks.add(new ClassMarks(aClass.getName(), calcAverageMarkOfMarkList(blanksMarks)));

        }

        return classMarks;
    }

    public Double calcAverageMarkOfMarkList(List<Double> marks) {
        if (marks != null) {
            Double result = 0.0;
            int counterWithMarksDifFromZero = 0;
            for (Double aDouble : marks) {
                if (aDouble >= 2.0) {
                    result += aDouble;
                    counterWithMarksDifFromZero++;
                }
            }

            Double avrMark = 0.0;

            if (counterWithMarksDifFromZero != 0) {
                avrMark = result / (double)counterWithMarksDifFromZero;
            }
            /*System.out.println("Average Mark for Class");
            System.out.println(avrMark);*/
            return avrMark;
        }

        return 0.0;
    }
}
