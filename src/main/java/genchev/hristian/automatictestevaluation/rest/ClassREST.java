package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.inputModels.InputEmail;
import genchev.hristian.automatictestevaluation.models.Student;
import genchev.hristian.automatictestevaluation.services.ClassServiece;
import genchev.hristian.automatictestevaluation.services.StudentService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Singleton
@Path("user")
public class ClassREST {

    private ClassServiece classServiece;

    private StudentService studentService;

    @Inject
    public ClassREST(ClassServiece classServiece, StudentService studentService) {
        this.classServiece = classServiece;
        this.studentService = studentService;
    }

    @POST
    @Path("classes")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Class> getClasses(InputEmail input) {
        String mail = input.getEmail();
        System.out.println("email kato poluchava zaqvka: " + mail);

        return classServiece.getAllClasses(mail);
    }

    @POST
    @Path("classes/new")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Student> createClass(NewClassInput input) {

        classServiece.createClass(input);
        return studentService.getStudents(input);
    }
}
