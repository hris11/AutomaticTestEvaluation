package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.OutputModels.StudentMark;
import genchev.hristian.automatictestevaluation.models.Result;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

public interface ResultREST {
    Result getStudentResult(Integer blankId, Integer studentId);
    List<StudentMark> getBlankResult(Integer blankId);
    BlankMarks getBlankMarks(Integer blankId);
}
