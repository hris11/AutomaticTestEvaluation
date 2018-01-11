package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.models.GetClasses;
import genchev.hristian.automatictestevaluation.services.ClassServiece;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Singleton
@Path("user")
public class ClassREST {

    private ClassServiece classServiece;

    @Inject
    public ClassREST(ClassServiece classServiece) {
        this.classServiece = classServiece;
    }

    @POST
    @Path("classes")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Class> getClasses(GetClasses input) {
        String mail = input.getEmail();
        System.out.println("email kato poluchava zaqvka: " + mail);

        return classServiece.getAllClasses(mail);
    }

    @POST
    @Path("classes/new")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createClass(Class input) {

        classServiece.createClass(input);
    }
}
