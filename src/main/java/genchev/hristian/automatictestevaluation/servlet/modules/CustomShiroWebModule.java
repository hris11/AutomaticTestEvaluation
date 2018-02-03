package genchev.hristian.automatictestevaluation.servlet.modules;

import com.google.inject.Inject;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import genchev.hristian.automatictestevaluation.services.UserService;
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

        this.addFilterChain("/rest/auth/**", filterConfig(ANON));
        this.addFilterChain("/rest/**", filterConfig(AUTHC));
    }
    
    @Provides
    @Singleton
    @Inject
    CustomShiroRealm loadCustomShiroRealm(UserService userService) {
      CustomShiroRealm realm = new CustomShiroRealm(userService);
      
      return realm;
    }
    
}
