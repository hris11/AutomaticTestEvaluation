package genchev.hristian.automatictestevaluation.servlet.modules;

import com.google.inject.Singleton;
import java.util.HashMap;
import java.util.Map;

import com.google.inject.servlet.ServletModule;
import genchev.hristian.automatictestevaluation.servlet.config.GenericBootstrapConstants;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.guice.spi.container.servlet.GuiceContainer;
import org.apache.shiro.guice.web.GuiceShiroFilter;
import org.apache.shiro.realm.Realm;

public class BootstrapServletModule extends ServletModule {

    private static final String propertyPackages = GenericBootstrapConstants.JERSEY_PROPERTY_PACKAGES;

    @Override
    protected void configureServlets() {
        super.configureServlets();

        //get the bootstrapping Properties file
        install(new BootstrapPropertiesModule());

        filter("/rest/*").through(GuiceShiroFilter.class);

        Map<String, String> params = new HashMap<String, String>();
        params.put(PackagesResourceConfig.PROPERTY_PACKAGES, propertyPackages);
        //params.put("jersey.config.server.provider.classnames", "org.glassfish.jersey.media.multipart.MultiPartFeature");
        //if you had a Persistence Service like JPA Unit of Work you would need to add this PersistFilter also.
        //filter("/*").through(PersistFilter.class);
        //if you had a ShiroWebModule installed above you would need to add this GuiceShiroFilter also.
        //filter("/*").through(GuiceShiroFilter.class);
        serve("/rest/*").with(GuiceContainer.class, params);

    }
}
