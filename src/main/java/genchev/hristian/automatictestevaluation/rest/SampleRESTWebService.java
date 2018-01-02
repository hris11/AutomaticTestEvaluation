package genchev.hristian.automatictestevaluation.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.google.inject.Inject;
import com.google.inject.name.Named;
import com.sun.jersey.spi.resource.Singleton;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@Singleton
@Path("hello")
public class SampleRESTWebService {

    @Inject
    @Named("hello.world.string")
    private String helloWorldString;

    @GET
    @Produces("application/json")
    public Response helloWorld() {
        try {
            Connection conn = getConnection();
            viewTable(conn);
        } catch (URISyntaxException ex) {
            Logger.getLogger(SampleRESTWebService.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(SampleRESTWebService.class.getName()).log(Level.SEVERE, null, ex);
        }
        return Response.ok(helloWorldString + "\n").build();
    }

    // Test method that will be removed in near future
    private static Connection getConnection() throws URISyntaxException, SQLException {
        URI dbUri = new URI(System.getenv("DATABASE_URL"));
        System.out.println("DATABASE_URL: " + System.getenv("DATABASE_URL"));

        String username = dbUri.getUserInfo().split(":")[0];
        String password = dbUri.getUserInfo().split(":")[1];
        String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath();
        System.out.println(username);
        System.out.println(password);
        System.out.println(dbUrl);

        return DriverManager.getConnection(dbUrl, username, password);
    }

    public static void viewTable(Connection con)
            throws SQLException {

        Statement stmt = null;
        String query = "SELECT name FROM test";
        try {
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            System.out.println("Reading data from DB...");
            while (rs.next()) {
                String name = rs.getString("name");
                System.out.println("Name: " + name);
            }
        } catch (SQLException e) {
            Logger.getLogger(SampleRESTWebService.class.getName()).log(Level.SEVERE, null, e);
        } finally {
            if (stmt != null) {
                stmt.close();
            }
        }
    }

}
