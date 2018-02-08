package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.OutputModels.StudentMark;
import genchev.hristian.automatictestevaluation.models.Result;

import java.util.List;

public interface ResultService {
    Result getStudentResult(Integer blankId, Integer studentId);

    List<StudentMark> getBlankResult(Integer blankId);

    BlankMarks getBlankMarks(Integer blankId);
}
