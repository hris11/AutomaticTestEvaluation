package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.OutputModels.StudentMark;
import genchev.hristian.automatictestevaluation.models.Result;
import genchev.hristian.automatictestevaluation.models.Student;
import genchev.hristian.automatictestevaluation.repository.ResultRepository;
import genchev.hristian.automatictestevaluation.repository.StudentRepository;

import java.util.ArrayList;
import java.util.List;

public class ResultServiceImpl implements ResultService {

    private ResultRepository resultRepository;

    private StudentRepository studentRepository;

    @Inject
    public ResultServiceImpl(ResultRepository resultRepository, StudentRepository studentRepository) {
        this.resultRepository = resultRepository;
        this.studentRepository = studentRepository;
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
}
