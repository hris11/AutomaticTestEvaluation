package genchev.hristian.automatictestevaluation.repository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ConfigDBConnection {

    private static final Map<String, Object> configOverrides = configureDbConnection();
    private static EntityManagerFactory emf = null;
    private static  EntityManager em = null;

    private static Map<String, Object> configureDbConnection() {
        Map<String, Object> configOverrides = null;

        try {
            URI dbUri = new URI(System.getenv("DATABASE_URL"));
            System.out.println("DATABASE_URL: " + System.getenv("DATABASE_URL"));

            configOverrides = new HashMap<String, Object>();

            String username = dbUri.getUserInfo().split(":")[0];
            String password = dbUri.getUserInfo().split(":")[1];
            String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath();

            configOverrides.put("hibernate.connection.url", dbUrl);
            configOverrides.put("hibernate.connection.username", username);
            configOverrides.put("hibernate.connection.password", password);

            System.out.println(username);
            System.out.println(password);
            System.out.println(dbUrl);
        } catch (URISyntaxException ex) {
            ex.printStackTrace();
        }

        return configOverrides;
    }
    
    public static void init() {
        emf = Persistence.createEntityManagerFactory("my-pu", configOverrides);
        em = emf.createEntityManager();        
    }
    
    public static void close() {
        
    }

}
