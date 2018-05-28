package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.OutputModels.ClassMarks;
import genchev.hristian.automatictestevaluation.OutputModels.StudentMark;
import genchev.hristian.automatictestevaluation.inputModels.InputEmail;
import genchev.hristian.automatictestevaluation.models.Result;
import genchev.hristian.automatictestevaluation.services.ResultServiceImpl;
import genchev.hristian.automatictestevaluation.services.UserServiceImpl;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("result")
public class ResultRESTImpl implements ResultREST {

    private ResultServiceImpl resultService;

    private UserServiceImpl userService;

    @Inject
    public ResultRESTImpl(ResultServiceImpl resultService, UserServiceImpl userService) {
        this.resultService = resultService;
        this.userService = userService;
    }


    @GET
    @Path("{blank_id}/{student_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Result getStudentResult(@PathParam("blank_id") Integer blankId, @PathParam("student_id") Integer studentId) {
        Result result = null;
        try {
            result = resultService.getStudentResult(blankId, studentId);
        } catch (Exception ex) {
            System.out.println("result not found");
        }

        return result;
    }

    @GET
    @Path("{blank_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<StudentMark> getBlankResult(@PathParam("blank_id") Integer blankId) {
        return resultService.getBlankResult(blankId);
    }

    @GET
    @Path("{blank_id}/marks")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public BlankMarks getBlankMarks(@PathParam("blank_id") Integer blankId) {
        return resultService.getBlankMarks(blankId);
    }

    @POST
    @Path("classes/marks")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<ClassMarks> getClassMarks(InputEmail emailObj) {
        return resultService.getClassesMarks(emailObj.getEmail());
    }
}
