package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.inputModels.LoginUser;
import genchev.hristian.automatictestevaluation.models.User;

public interface UserService {

    Integer registerUser(User user);

    boolean containsEmail(User user);

    boolean authLoginUser(LoginUser loginUser);
}
