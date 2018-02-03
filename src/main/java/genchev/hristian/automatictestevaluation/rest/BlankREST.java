package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.models.Blank;
import genchev.hristian.automatictestevaluation.services.BlankService;

import com.google.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("users/classes")
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

    @GET
    @Path("blanks/{blank_id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Blank getBlankById(@PathParam("blank_id") Integer blankId) {
        return blankService.getBlankById(blankId);
    }

    @POST
    @Path("{class_id}/blanks")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Blank createNewBlank(@PathParam("class_id") Integer classId, Blank blank) {
        return blankService.insert(classId, blank);
    }

    @DELETE
    @Path("blanks/{blank_id}")
    public void deleteBlankById(@PathParam("blank_id") Integer blank_id) {
        blankService.deleteBlankById(blank_id);
    }

}
