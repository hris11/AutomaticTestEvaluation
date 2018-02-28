package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.inputModels.NewStudentInput;
import genchev.hristian.automatictestevaluation.models.Student;

import java.util.List;

public interface StudentService {

    List<Student> getStudents(NewClassInput input);

    void insert(NewStudentInput input);

    Integer getClassId(NewClassInput input);

    List<Student> getStudentsById(Integer classId);
}
