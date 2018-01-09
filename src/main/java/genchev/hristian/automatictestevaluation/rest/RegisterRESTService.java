package genchev.hristian.automatictestevaluation.rest;

import javax.ws.rs.*;

import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.services.UserService;
import javax.ws.rs.core.MediaType;

@Singleton
@Path("register")
public class RegisterRESTService {
    UserService users = new UserService();
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User helloWorld(User u) {

        System.out.println("Email: " + u.getEmail());

        return u;
    }
}
