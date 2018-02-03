package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.models.Result;
import genchev.hristian.automatictestevaluation.services.ResultServiceImpl;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("result")
public class ResultRESTImpl implements ResultREST {

    private ResultServiceImpl resultService;

    @Inject
    public ResultRESTImpl(ResultServiceImpl resultService) {
        this.resultService = resultService;
    }


    @GET
    @Path("{blank_id}/{student_id}")
    @Produces(MediaType.APPLICATION_JSON)
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
    public List<Result> getBlankResult(@PathParam("blank_id") Integer blankId) {
        return resultService.getBlankResult(blankId);
    }

    @GET
    @Path("{blank_id}/marks")
    @Produces(MediaType.APPLICATION_JSON)
    public BlankMarks getBlankMarks(@PathParam("blank_id") Integer blankId) {
        return resultService.getBlankMarks(blankId);
    }
}
