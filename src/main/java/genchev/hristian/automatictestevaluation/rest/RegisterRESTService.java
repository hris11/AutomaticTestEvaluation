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
    public Response helloWorld(@QueryParam("email") String email,
                               @QueryParam("password") String password,
                               @QueryParam("firstName") String firstName,
                               @QueryParam("lastName") String secondName) {

        System.out.println(email);
        System.out.println(password);
        System.out.println(firstName);
        System.out.println(secondName);

        return Response.ok(" ss"+"\n").build();
    }
}
