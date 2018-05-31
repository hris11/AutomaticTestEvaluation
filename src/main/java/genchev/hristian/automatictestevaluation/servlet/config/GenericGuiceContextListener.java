package genchev.hristian.automatictestevaluation.servlet.config;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import genchev.hristian.automatictestevaluation.servlet.modules.BootstrapServletModule;
import genchev.hristian.automatictestevaluation.servlet.modules.DbModule;
import genchev.hristian.automatictestevaluation.servlet.modules.CustomShiroWebModule;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import org.apache.shiro.guice.aop.ShiroAopModule;

public class GenericGuiceContextListener extends GuiceServletContextListener{

    private ServletContext servletContext;
    
    @Override
    protected Injector getInjector() {
        // Loads OpenCV Java and native library
        nu.pattern.OpenCV.loadShared();
        Injector injector = Guice.createInjector(
                new BootstrapServletModule(),
                new DbModule(),
                new CustomShiroWebModule(servletContext),
                new ShiroAopModule()
        );
        
        return injector;
    }
    
    @Override
    public void contextInitialized( final ServletContextEvent servletContextEvent ) {
        this.servletContext = servletContextEvent.getServletContext();
        super.contextInitialized( servletContextEvent );
    }
}
