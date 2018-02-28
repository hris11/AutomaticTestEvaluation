package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.inputModels.NewStudentInput;
import genchev.hristian.automatictestevaluation.models.Student;

import java.util.List;

public interface StudentREST {

    List<Student> getStudentsByClassId(Integer classId);

    List<Student> getStudents(NewClassInput input);

    List<Student> newStudent (NewStudentInput input);
}
