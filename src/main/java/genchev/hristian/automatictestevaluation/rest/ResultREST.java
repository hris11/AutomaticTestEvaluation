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
    @GET
    @Path("{blank_id}/{student_id}")
    @Produces(MediaType.APPLICATION_JSON)
    Result getStudentResult(@PathParam("blank_id") Integer blankId, @PathParam("student_id") Integer studentId);

    @GET
    @Path("{blank_id}")
    @Produces(MediaType.APPLICATION_JSON)
    List<StudentMark> getBlankResult(@PathParam("blank_id") Integer blankId);

    @GET
    @Path("{blank_id}/marks")
    @Produces(MediaType.APPLICATION_JSON)
    BlankMarks getBlankMarks(@PathParam("blank_id") Integer blankId);
}
