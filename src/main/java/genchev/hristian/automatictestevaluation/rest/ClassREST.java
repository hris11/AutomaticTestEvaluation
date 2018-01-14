package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import com.sun.jersey.spi.resource.Singleton;
import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.inputModels.InputEmail;
import genchev.hristian.automatictestevaluation.models.Student;
import genchev.hristian.automatictestevaluation.services.ClassService;
import genchev.hristian.automatictestevaluation.services.StudentService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("user")
public class ClassREST {

    private ClassService classService;

    private StudentService studentService;

    @Inject
    public ClassREST(ClassService classService, StudentService studentService) {
        this.classService = classService;
        this.studentService = studentService;
    }

    @POST
    @Path("classes")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Class> getClasses(InputEmail input) {
        String mail = input.getEmail();
        System.out.println("email kato poluchava zaqvka: " + mail);

        return classService.getAllClasses(mail);
    }

    @POST
    @Path("classes/new")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Student> createClass(NewClassInput input) {

        classService.createClass(input);
        return studentService.getStudents(input);
    }

    @DELETE
    @Path("classes/{id}")
    public Response deleteClassById(@PathParam("id") Integer classId) {
        classService.deleteById(classId);

        return Response.ok().build();
    }
}
