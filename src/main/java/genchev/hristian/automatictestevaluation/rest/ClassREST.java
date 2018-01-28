package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
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

        return classService.getAllClasses(mail);
    }

    @GET
    @Path("{user_id}/classes")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Class> getClasses(@PathParam("user_id") Integer userId) {
        return classService.getAllClassesById(userId);
    }

    @POST
    @Path("classes/new")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Student> createClass(NewClassInput input) {

        classService.createClass(input);
        return studentService.getStudents(input);
    }

    @GET
    @Path("classes/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Class getClassById(@PathParam("id") Integer classId) {
        return classService.getClassById(classId);
    }


    @DELETE
    @Path("classes/{id}")
    public Response deleteClassById(@PathParam("id") Integer classId) {
        classService.deleteById(classId);

        return Response.ok().build();
    }
}
