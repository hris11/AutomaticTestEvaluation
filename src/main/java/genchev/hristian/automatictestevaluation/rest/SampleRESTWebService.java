package genchev.hristian.automatictestevaluation.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.google.inject.Inject;
import com.google.inject.name.Named;
import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.models.Test;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

@Singleton
@Path("hello")
public class SampleRESTWebService {

    @Inject
    @Named("hello.world.string")
    private String helloWorldString;

    @GET
    @Produces("application/json")
    public Response helloWorld() {
        EntityManagerFactory emf = null;
        EntityManager em = null;
        Map<String, Object> configOverrides = null;
        try {
            configOverrides = configureDbConnection();
            emf = Persistence.createEntityManagerFactory("my-pu", configOverrides);

            em = emf.createEntityManager(); // Retrieve an application managed entity manager
            // Work with the EM
            
            // Insert row
            em.getTransaction().begin();
            Test name = new Test();
            name.setName("genchev");
            em.persist(name);
            em.getTransaction().commit();
            
            // Select rows
            em.getTransaction().begin();
            List<Test> result = em.createQuery( "from Test", Test.class ).getResultList();
            for ( Test test : result ) {
                System.out.println( "Name: " +  test.getName());
            }
            em.getTransaction().commit();

        } catch (URISyntaxException ex) {
            Logger.getLogger(SampleRESTWebService.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            if (em != null) {
                em.close();
            }
            if (emf != null) {
                emf.close(); //close at application end
            }
        }

        return Response.ok(helloWorldString + "\n").build();
    }

    // Test method that will be removed in near future
    private Map<String, Object> configureDbConnection() throws URISyntaxException {
        URI dbUri = new URI(System.getenv("DATABASE_URL"));
        System.out.println("DATABASE_URL: " + System.getenv("DATABASE_URL"));

        Map<String, Object> configOverrides = new HashMap<String, Object>();

        String username = dbUri.getUserInfo().split(":")[0];
        String password = dbUri.getUserInfo().split(":")[1];
        String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath();

        configOverrides.put("hibernate.connection.url", dbUrl);
        configOverrides.put("hibernate.connection.username", username);
        configOverrides.put("hibernate.connection.password", password);

        System.out.println(username);
        System.out.println(password);
        System.out.println(dbUrl);

        return configOverrides;
    }

}
