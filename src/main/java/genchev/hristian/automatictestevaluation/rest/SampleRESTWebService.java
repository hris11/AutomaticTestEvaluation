package genchev.hristian.automatictestevaluation.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.google.inject.Inject;
import com.google.inject.name.Named;
import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.repository.ConfigDBConnection;

import java.net.URISyntaxException;
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
            configOverrides = ConfigDBConnection.configureDbConnection();
            emf = Persistence.createEntityManagerFactory("my-pu", configOverrides);

            em = emf.createEntityManager(); // Retrieve an application managed entity manager
            // Work with the EM
            
            // Insert row
            em.getTransaction().begin();
//            Test name = new Test();
//            name.setName("genchev");
//            em.persist(name);
            em.getTransaction().commit();
            
            // Select rows
            em.getTransaction().begin();
//            List<Test> result = em.createQuery( "from Test", Test.class ).getResultList();
//            for ( Test test : result ) {
//                System.out.println( "Name: " +  test.getName());
//            }
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

}
