package genchev.hristian.automatictestevaluation.servlet.modules;

import com.google.inject.Inject;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import genchev.hristian.automatictestevaluation.services.UserServiceImpl;
import javax.servlet.ServletContext;
import org.apache.shiro.guice.web.ShiroWebModule;

public class CustomShiroWebModule extends ShiroWebModule {
    
    public CustomShiroWebModule(ServletContext sc) {
        super(sc);
    }

    @Override
    protected void configureShiroWeb() {
        try {
            bindRealm().to(CustomShiroRealm.class);
        } catch (SecurityException e) {
            addError(e);
        }

        this.addFilterChain("/rest/**", ANON);
        this.addFilterChain("/rest/user/classes", AUTHC);
        this.addFilterChain("/rest/user/classes/new", AUTHC);
        this.addFilterChain("/rest/users/classes/*/blanks", AUTHC);
        this.addFilterChain("/rest/students/new", AUTHC);


    }
    
    @Provides
    @Singleton
    @Inject
    CustomShiroRealm loadCustomShiroRealm(UserServiceImpl userServiceImpl) {
      CustomShiroRealm realm = new CustomShiroRealm(userServiceImpl);
      
      return realm;
    }
    
}
