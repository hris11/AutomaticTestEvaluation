package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.inputModels.LoginUser;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.services.SecurityServiceImpl;
import genchev.hristian.automatictestevaluation.services.UserServiceImpl;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;

@Path("auth")
public class AuthRESTImpl implements AuthREST {
    private UserServiceImpl userServiceImpl;
    private SecurityServiceImpl securityServiceImpl;

    @Inject
    public AuthRESTImpl(UserServiceImpl userServiceImpl, SecurityServiceImpl securityServiceImpl) {
        this.userServiceImpl = userServiceImpl;
        this.securityServiceImpl = securityServiceImpl;
    }

    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Override
    public Response login(LoginUser loginUser) {
        loginUser.setPassword(
                securityServiceImpl.encryptPassword(loginUser.getPassword())
        );

        /*
        * The next part of code is taken from: https://shiro.apache.org/10-minute-tutorial.html
        * */

        int status = 401;
        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated()) {
            UsernamePasswordToken token = new UsernamePasswordToken(loginUser.getEmail(), loginUser.getPassword());
            
            try {
                currentUser.login(token);
                //System.out.println("if no exception, that's it, we're done!");
                status = 200;
            } catch (UnknownAccountException uae) {
                //username wasn't in the system, show them an error message?
                //System.out.println("username wasn't in the system, show them an error message?");
            } catch (IncorrectCredentialsException ice) {
                //password didn't match, try again?
                //System.out.println("password didn't match, try again?");
            } catch (LockedAccountException lae) {
                //account for that username is locked - can't login.  Show them a message?
                //System.out.println("account for that username is locked - can't login.  Show them a message?");
            } catch (AuthenticationException ae) {
                //unexpected condition - error?
                //System.out.println("unexpected condition - error?");
            }
        }
        
        return Response.status(status).build();
    }

    @POST
    @Path("logout")
    @Override
    public Response logout() {
        Subject currentUser = SecurityUtils.getSubject();
        if (currentUser.isAuthenticated()) {
            currentUser.logout();
        }
        
        return Response.ok().build();
    }

    @POST
    @Path("register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public User register(User u) {

        u.setPassword(
                securityServiceImpl.encryptPassword(u.getPassword())
    );

        userServiceImpl.registerUser(u);

        return u;
    }
}
