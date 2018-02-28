package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.models.Blank;
import genchev.hristian.automatictestevaluation.services.BlankServiceImpl;

import com.google.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("users/classes")
public class BlankRESTImpl implements BlankREST {

    private BlankServiceImpl blankServiceImpl;

    @Inject
    public BlankRESTImpl(BlankServiceImpl blankServiceImpl) {
        this.blankServiceImpl = blankServiceImpl;
    }


    @GET
    @Path("{class_id}/blanks")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Blank> getClassBlanksById(@PathParam("class_id") Integer classId) {
        return blankServiceImpl.getClassBlanksByClassId(classId);
    }

    @GET
    @Path("blanks")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Blank> getAllBlanks() {
        return blankServiceImpl.getAllBlanks();
    }

    @GET
    @Path("blanks/{blank_id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Blank getBlankById(@PathParam("blank_id") Integer blankId) {
        return blankServiceImpl.getBlankById(blankId);
    }

    @POST
    @Path("{class_id}/blanks")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Blank createNewBlank(@PathParam("class_id") Integer classId, Blank blank) {
        return blankServiceImpl.insert(classId, blank);
    }

    @DELETE
    @Path("blanks/{blank_id}")
    @Override
    public void deleteBlankById(@PathParam("blank_id") Integer blank_id) {
        blankServiceImpl.deleteBlankById(blank_id);
    }



}
