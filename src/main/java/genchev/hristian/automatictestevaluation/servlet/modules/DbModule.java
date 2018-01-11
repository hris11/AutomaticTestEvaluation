package genchev.hristian.automatictestevaluation.servlet.modules;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import java.net.URI;
import java.net.URISyntaxException;

/**
 * @author Ben McCann (benmccann.com)
 */
public class DbModule extends AbstractModule {

    private static final ThreadLocal<EntityManager> ENTITY_MANAGER_CACHE
            = new ThreadLocal<EntityManager>();

    public void configure() {
    }

    @Provides
    @Singleton
    public EntityManagerFactory provideEntityManagerFactory() {
        Map<String, String> configOverrides = null;

        try {
            URI dbUri = new URI(System.getenv("DATABASE_URL"));
            System.out.println("DATABASE_URL: " + System.getenv("DATABASE_URL"));

            configOverrides = new HashMap<>();

            String username = dbUri.getUserInfo().split(":")[0];
            String password = dbUri.getUserInfo().split(":")[1];
            String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath();

            configOverrides.put("hibernate.connection.url", dbUrl);
            configOverrides.put("hibernate.connection.username", username);
            configOverrides.put("hibernate.connection.password", password);
        } catch (URISyntaxException ex) {
            ex.printStackTrace();
        }

        return Persistence.createEntityManagerFactory("my-pu", configOverrides);
    }

    @Provides
    public EntityManager provideEntityManager(EntityManagerFactory entityManagerFactory) {
        EntityManager entityManager = ENTITY_MANAGER_CACHE.get();
        if (entityManager == null) {
            ENTITY_MANAGER_CACHE.set(entityManager = entityManagerFactory.createEntityManager());
        }
        return entityManager;
    }

}
