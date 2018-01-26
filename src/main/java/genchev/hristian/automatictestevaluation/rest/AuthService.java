package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.inputModels.LoginUser;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.services.SecurityService;
import genchev.hristian.automatictestevaluation.services.UserService;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.imageio.ImageIO;
import com.google.zxing.BinaryBitmap;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.NotFoundException;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

import javax.ws.rs.*;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;

@Path("auth")
public class AuthService {
    private static final long serialVersionUID = 1L;

    private final String SESSION_COOKIE_NAME = "ate-session";

    private UserService userService;
    private SecurityService securityService;

    @Inject
    public AuthService(UserService userService, SecurityService securityService) {
        this.userService = userService;
        this.securityService = securityService;
    }

    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(LoginUser loginUser) {
        System.out.println("email: " + loginUser.getEmail());
        System.out.println("password: " + loginUser.getPassword());

        loginUser.setPassword(
                securityService.encryptPassword(loginUser.getPassword())
        );
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

        u.setPassword(
                securityService.encryptPassword(u.getPassword())
        );
        System.out.println("Email: " + u.getEmail());
        System.out.println(userService.registerUser(u));

        return u;
    }
}
