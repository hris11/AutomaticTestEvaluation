package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.models.Blank;
import genchev.hristian.automatictestevaluation.services.BlankService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("user/class")
public class BlankREST {

    private BlankService blankService;

    @Inject
    public BlankREST(BlankService blankService) {
        this.blankService = blankService;
    }


    @GET
    @Path("{class_id}/blanks")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Blank> getClassBlanksById(@PathParam("class_id") Integer classId) {
        return blankService.getClassBlanksByClassId(classId);
    }

    @POST
    @Path("{id}/blanks")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createNewBlank(@PathParam("id") Integer classId, Blank blank) {
        blankService.insert(classId, blank);
    }

    @DELETE
    @Path("blanks/{blank_id}")
    public void deleteBlankById(@PathParam("blank_id") Integer blank_id) {
        blankService.deleteBlankById(blank_id);
    }

}
