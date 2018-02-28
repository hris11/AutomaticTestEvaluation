package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.inputModels.InputEmail;
import genchev.hristian.automatictestevaluation.models.Student;
import genchev.hristian.automatictestevaluation.services.ClassServiceImpl;
import genchev.hristian.automatictestevaluation.services.StudentServiceImpl;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import org.apache.shiro.authz.annotation.RequiresAuthentication;

@Path("user")
@RequiresAuthentication
public class ClassRESTImpl implements ClassREST {

    private ClassServiceImpl classServiceImpl;

    private StudentServiceImpl studentServiceImpl;

    @Inject
    public ClassRESTImpl(ClassServiceImpl classServiceImpl, StudentServiceImpl studentServiceImpl) {
        this.classServiceImpl = classServiceImpl;
        this.studentServiceImpl = studentServiceImpl;
    }

    @POST
    @Path("classes")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Class> getClasses(InputEmail input) {
        String mail = input.getEmail();

        return classServiceImpl.getAllClasses(mail);
    }

    @GET
    @Path("{user_id}/classes")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Class> getClasses(@PathParam("user_id") Integer userId) {
        return classServiceImpl.getAllClassesById(userId);
    }

    @POST
    @Path("classes/new")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public List<Student> createClass(NewClassInput input) {

        classServiceImpl.createClass(input);
        return studentServiceImpl.getStudents(input);
    }

    @GET
    @Path("classes/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Class getClassById(@PathParam("id") Integer classId) {
        return classServiceImpl.getClassById(classId);
    }


    @DELETE
    @Path("classes/{id}")
    @Override
    public Response deleteClassById(@PathParam("id") Integer classId) {
        classServiceImpl.deleteById(classId);

        return Response.ok().build();
    }
}
