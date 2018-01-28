package genchev.hristian.automatictestevaluation.servlet.config;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import genchev.hristian.automatictestevaluation.servlet.modules.BootstrapServletModule;
import genchev.hristian.automatictestevaluation.servlet.modules.DbModule;

public class GenericGuiceContextListener extends GuiceServletContextListener{

    @Override
    protected Injector getInjector() {
        // Loads OpenCV Java and native library
        nu.pattern.OpenCV.loadShared();
        return Guice.createInjector(
                new BootstrapServletModule(),
                new DbModule()
        );
    }
}
