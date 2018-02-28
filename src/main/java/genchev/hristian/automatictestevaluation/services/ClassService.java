package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.models.Class;

import java.util.List;

public interface ClassService {

    void createClass(NewClassInput input);

    List<Class> getAllClasses(String email);

    void deleteById(Integer classId);

    Class getClassById(Integer classId);

    List<Class> getAllClassesById(Integer userId);

}
