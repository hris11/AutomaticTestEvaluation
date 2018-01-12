package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.inputModels.NewStudentInput;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.models.Student;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.repository.ClassRepository;
import genchev.hristian.automatictestevaluation.repository.StudentRepository;
import genchev.hristian.automatictestevaluation.repository.UserRepository;

import java.util.List;

public class StudentService {

    private UserRepository userRepository;

    private ClassRepository classRepository;

    private StudentRepository studentRepository;

    @Inject
    public StudentService(UserRepository userRepository, ClassRepository classRepository, StudentRepository studentRepository) {
        this.userRepository = userRepository;
        this.classRepository = classRepository;
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(NewClassInput input) {
        Integer classId = getClassId(input);

        List<Student> result = studentRepository.getStudetnsById(classId);

        return result;
    }

    public void insert(NewStudentInput input) {
        Integer classId = getClassId(input.getNewClassInput());

        Student newStudent = input.getNewStudent();
        newStudent.setClassId(classId);

        studentRepository.insert(newStudent);
    }

    public Integer getClassId(NewClassInput input) {
        List<User> users = userRepository.findByEmail(input.getInputEmail().getEmail());

        Integer userId = users.get(0).getId();
        String className = input.getNewClass().getName();
        Class theClass = classRepository.findByIdAndName(userId, className);

        Integer classId = theClass.getId();

        return classId;
    }
}
