package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.inputModels.NewClassInput;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.repository.ClassRepository;
import genchev.hristian.automatictestevaluation.repository.StudentRepository;
import genchev.hristian.automatictestevaluation.repository.UserRepository;

import java.util.List;

public class ClassServiceImpl implements ClassService {

    private UserRepository userRepository;

    private ClassRepository classRepository;

    private StudentRepository studentRepository;

    @Inject
    public ClassServiceImpl(UserRepository userRepository, ClassRepository classRepository, StudentRepository studentRepository) {
        this.userRepository = userRepository;
        this.classRepository = classRepository;
        this.studentRepository = studentRepository;
    }

    @Override
    public void createClass(NewClassInput input) {

        List<User> users = userRepository.findByEmail(input.getInputEmail().getEmail());


        Class newClass = input.getNewClass();
        newClass.setUserId(users.get(0).getId());

        classRepository.insert(newClass);
    }

    @Override
    public List<Class> getAllClasses(String email) {
        List<User> users = userRepository.findByEmail(email);

        System.out.println("before loop and email for compare: " + email);
        for (User u: users) {
            System.out.println("email: " + u.getEmail());
            System.out.println("ID: " + u.getId());
        }
        List<Class> result = null;


        result = classRepository.findByUserId(users.get(0).getId());

        /*if (users.size() != 0) {
            user = users.get(0);
        }

        if (user != null) {
            userId = user.getId();
        } else {
            return null;
        }

        if (userId != 0) {
            result = classRepository.findByUserId(userId);
        } else {
            return null;
        }*/

        System.out.println("emaila e: " + email);

        for (Class c : result) {
            System.out.println("class name: " + c.getName());
        }

        return result;
    }

    @Override
    public void deleteById(Integer classId) {
        Class theClass = classRepository.findById(classId);

        classRepository.delete(theClass);
    }

    @Override
    public Class getClassById(Integer classId) {
        return classRepository.findById(classId);
    }

    @Override
    public List<Class> getAllClassesById(Integer userId) {
        return classRepository.findByUserId(userId);
    }
}
