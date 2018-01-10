package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.models.LoginUser;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.services.UserService;

import javax.ws.rs.*;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

@Singleton
@Path("auth")
public class AuthService {
    private static final long serialVersionUID = 1L;
    
    private final String SESSION_COOKIE_NAME = "ate-session";
    
    private UserService userService;
    
    @Inject
    public AuthService(UserService userService) {
        this.userService = userService;
    }
    
    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(LoginUser loginUser) {
        System.out.println("email: " + loginUser.getEmail());
        System.out.println("password: " + loginUser.getPassword());

        if (userService.authLoginUser(loginUser)) {

            Cookie loginCookie = new Cookie(SESSION_COOKIE_NAME, "success");
            NewCookie nc = new NewCookie(loginCookie, "", 60*60*24, false);

            System.out.println("Lognat si chestito");
            return Response.ok().cookie(nc).build();
        } else {
            System.out.println("new si lognat brat");
            return Response.status(401).build();
        }

    }
    
    @POST
    @Path("logout")
    public Response logout(@QueryParam("username") String name, @CookieParam(SESSION_COOKIE_NAME) Cookie cookie) {
        System.out.println("Name: " + name);
        System.out.println("Logged in: " + cookie.getValue());
        Cookie loginCookie = new Cookie(SESSION_COOKIE_NAME, "false");
        NewCookie nc = new NewCookie(loginCookie, "", 0, false); // Ask the browser to delete the cookie
        
        return Response.ok().cookie(nc).build();
    }

    @POST
    @Path("register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User register(User u) {

        System.out.println("Email: " + u.getEmail());
        System.out.println(userService.registerUser(u));

        return u;
    }
    
}
