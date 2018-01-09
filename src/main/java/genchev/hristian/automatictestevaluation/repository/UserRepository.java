package genchev.hristian.automatictestevaluation.repository;

import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.rest.SampleRESTWebService;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

public class UserRepository {

    public List<User> getUsers() {
        EntityManagerFactory emf = null;
        EntityManager em = null;
        Map<String, Object> configOverrides = null;
        List<User> result = null;
        try {
            configOverrides = ConfigDBConnection.configureDbConnection();
            emf = Persistence.createEntityManagerFactory("my-pu", configOverrides);

            em = emf.createEntityManager(); // Retrieve an application managed entity manager
            // Work with the EM

            // Select rows
            em.getTransaction().begin();
                result = em.createQuery( "from users", User.class ).getResultList();
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

        return result;
    }

    public List<User> findByEmail(User user) {
        EntityManagerFactory emf = null;
        EntityManager em = null;
        Map<String, Object> configOverrides = null;
        List<User> result = null;
        try {
            configOverrides = ConfigDBConnection.configureDbConnection();
            emf = Persistence.createEntityManagerFactory("my-pu", configOverrides);

            em = emf.createEntityManager(); // Retrieve an application managed entity manager
            // Work with the EM

            // Select rows
            em.getTransaction().begin();
            result = em.createQuery( "from users where name = :email", User.class )
                    .setParameter("email", user.getEmail())
                    .getResultList();
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

        return result;
    }
}
