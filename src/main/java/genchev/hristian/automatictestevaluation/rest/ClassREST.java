package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.inputModels.InputEmail;
import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.models.Student;

import javax.ws.rs.core.Response;
import java.util.List;

public interface ClassREST {

    List<Class> getClasses(InputEmail input);

    List<Class> getClasses(Integer userId);

    List<Student> createClass(NewClassInput input);

    Class getClassById(Integer classId);

    Response deleteClassById(Integer classId);
}
