package genchev.hristian.automatictestevaluation.repository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

public class ConfigDBConnection {
    static public Map<String, Object> configureDbConnection() throws URISyntaxException {
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
