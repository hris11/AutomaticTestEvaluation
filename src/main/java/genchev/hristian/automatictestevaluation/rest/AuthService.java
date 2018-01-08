package genchev.hristian.automatictestevaluation.rest;

import com.sun.jersey.spi.resource.Singleton;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

@Singleton
@Path("auth")
public class AuthService {
    private static final long serialVersionUID = 1L;
    
    private final String SESSION_COOKIE_NAME = "ate-session";
    
    @POST
    @Path("login")
    public Response login(@QueryParam("username") String name, @QueryParam("password") String password) {
        System.out.println("Name: " + name);
        System.out.println("Password: " + password);
        
        Cookie loginCookie = new Cookie(SESSION_COOKIE_NAME, "success");
        NewCookie nc = new NewCookie(loginCookie, "", -1, false);
        
        return Response.ok().cookie(nc).build();
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
    
}
