package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.models.User;

import java.util.ArrayList;
import java.util.List;

public class UserService {

    private static List<User> users = new ArrayList<User>();

    public UserService() {

    }

    public void addUser(User user) {
        users.add(user);
    }


}
