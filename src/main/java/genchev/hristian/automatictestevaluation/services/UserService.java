package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.models.User;
import genchev.hristian.automatictestevaluation.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

public class UserService {


    public UserService() {

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
        } else if (false
                //user.getEmail().matches("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")
                ) {
            /*
            * Email is not valid*/
            return 3;
        } else if (containsEmail(user)) {
            /*
            * Email already exists*/
            return 4;
        } else if (!user.getPassword().matches("[A-Za-z0-9]")) {
            /*
            * Incorrect password*/
            return 5;
        }
        return 0;
    }

    public boolean containsEmail(User user) {
        UserRepository userRepository = new UserRepository();

        List<User> users = userRepository.findByEmail(user);

        if (users != null && users.size() != 0) {
            return true;
        }

        return false;
    }


}
