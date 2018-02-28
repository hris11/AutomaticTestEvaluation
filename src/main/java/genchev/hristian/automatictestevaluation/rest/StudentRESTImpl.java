package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.inputModels.NewStudentInput;
import genchev.hristian.automatictestevaluation.models.Student;
import genchev.hristian.automatictestevaluation.services.StudentService;
import com.google.inject.Inject;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import org.apache.shiro.authz.annotation.RequiresAuthentication;

@Path("students")
@RequiresAuthentication
public class StudentRESTImpl implements StudentREST {

    private StudentService studentService;

    @Inject
    public StudentRESTImpl(StudentService studentService) {
        this.studentService = studentService;
    }

    @GET
    @Path("all/{classId}")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Student> getStudentsByClassId(@PathParam("classId") Integer classId) {
        return studentService.getStudentsById(classId);
    }


    @POST
    @Path("all")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Student> getStudents(NewClassInput input) {
        return studentService.getStudents(input);
    }

    @POST
    @Path("new")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Student> newStudent (NewStudentInput input) {
        studentService.insert(input);

        return studentService.getStudents(input.getNewClassInput());
    }
}
