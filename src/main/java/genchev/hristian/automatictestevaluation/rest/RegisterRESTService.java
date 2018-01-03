package genchev.hristian.automatictestevaluation.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.services.UserService;

@Singleton
@Path("register")
public class RegisterRESTService {
    UserService users = new UserService();
    @POST
    @Produces("application/json")
    public Response helloWorld(@FormParam("email") String email,
                               @FormParam("password") String password,
                               @FormParam("firstName") String firstName,
                               @FormParam("secondName") String secondName) {
        return Response.ok(" ss"+"\n").build();
    }
}
