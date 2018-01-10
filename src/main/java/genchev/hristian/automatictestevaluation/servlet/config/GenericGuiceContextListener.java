package genchev.hristian.automatictestevaluation.servlet.config;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import genchev.hristian.automatictestevaluation.servlet.modules.BootstrapServletModule;
import genchev.hristian.automatictestevaluation.servlet.modules.DbModule;

/**
 * This class goes mapped in web.xml and is used to inject Google Guice's Injector into the Web Application Context.
 * 
 * @author pablo.biagioli
 *
 */
public class GenericGuiceContextListener extends GuiceServletContextListener{

	@Override
	protected Injector getInjector() {
		return Guice.createInjector(
                        new BootstrapServletModule(),
                        new DbModule()
                );
	}

	
}
