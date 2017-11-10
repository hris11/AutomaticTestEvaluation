package genchev.hristian.automatictestevaluation.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.Response;

import com.google.inject.Inject;
import com.google.inject.name.Named;
import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.Services.UserService;
import genchev.hristian.automatictestevaluation.models.User;

@Singleton
@Path("register")
public class RegisterRESTService {
    UserService users = new UserService();
    @POST
    @Produces("application/json")
    public Response helloWorld(@FormParam("email") String email,
                               @FormParam("email") String password,
                               @FormParam("email") String firstName,
                               @FormParam("email") String secondName){
        return Response.ok(" ss"+"\n").build();
    }
}
