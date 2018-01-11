package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.Class;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.repository.ClassRepository;
import genchev.hristian.automatictestevaluation.repository.UserRepository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public class ClassServiece {

    private UserRepository userRepository;

    private ClassRepository classRepository;

    @Inject
    public ClassServiece(UserRepository userRepository, ClassRepository classRepository) {
        this.userRepository = userRepository;
        this.classRepository = classRepository;
    }

    public Integer createClass(Class newClass) {
        return null;
    }

    public List<Class> getAllClasses(String email) {
        List<User> users = userRepository.findByEmail(email);
        List<Class> result = null;

        System.out.println("HELLO FROM GET ALL CLASSES");

        result = classRepository.findById(users.get(0).getId());

        /*if (users.size() != 0) {
            user = users.get(0);
        }

        if (user != null) {
            userId = user.getId();
        } else {
            return null;
        }

        if (userId != 0) {
            result = classRepository.findById(userId);
        } else {
            return null;
        }*/

        System.out.println("emaila e: " + email);

        for (Class c : result) {
            System.out.println("class name: " + c.getName());
        }

        return result;
    }
}
