package genchev.hristian.automatictestevaluation.servlet.modules;

import genchev.hristian.automatictestevaluation.inputModels.LoginUser;
import genchev.hristian.automatictestevaluation.services.UserService;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

public class CustomShiroRealm extends AuthorizingRealm {
    
    private UserService userService;
    
    public CustomShiroRealm(UserService userService) {
        this.userService = userService;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        UsernamePasswordToken upToken = (UsernamePasswordToken) token;
                
        LoginUser user = new LoginUser(upToken.getUsername(), new String(upToken.getPassword()));
        if (!userService.authLoginUser(user)) {
            throw new IncorrectCredentialsException();
        }
        SimpleAuthenticationInfo authn = new SimpleAuthenticationInfo(token.getPrincipal(), token.getCredentials(), getName());
        
        return authn;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {       
        return new SimpleAuthorizationInfo();
    }
    
    
}
