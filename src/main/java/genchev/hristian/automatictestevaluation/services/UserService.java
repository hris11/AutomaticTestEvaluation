package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.LoginUser;
import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.repository.UserRepository;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;

public class UserService {

    private UserRepository userRepository;

    @Inject
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Integer registerUser(User user) {
        if (user.getFirstName().matches("^\\s*$")) {
            /*
            * Checks if the firstName field contains space*/
            return 1;
        } else if (user.getLastName().matches("^\\s*$")) {
            /*
            * Checks if the lastName field contains space*/
            return 2;
        } else if (false //user.getEmail().matches("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")
                ) {
            /*
            * Email is not valid*/
            return 3;
        } else if (false //containsEmail(user)
                ) {
            /*
            * Email already exists*/
            return 4;
        } else if (false //                !user.getPassword().matches("[A-Za-z0-9]")
                ) {
            /*
            * Incorrect password*/
            return 5;
        }
        containsEmail(user);
        /*
        * All checks are done*/
        userRepository.insert(user);

        return 0;
    }

    public boolean containsEmail(User user) {
        List<User> users = userRepository.getUsers();

        for (User u : users) {
            System.out.println(u.getEmail());
        }

        if (users != null && users.size() != 0) {
            return true;
        }

        return false;
    }

    public boolean authLoginUser(LoginUser loginUser) {
        return userRepository.checkLogin(loginUser);
    }
}
