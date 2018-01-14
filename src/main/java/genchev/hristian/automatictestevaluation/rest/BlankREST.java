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
    @Path("blanks/new")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createNewBlank(Blank blank) {
        blankService.insert(blank);
    }

}
