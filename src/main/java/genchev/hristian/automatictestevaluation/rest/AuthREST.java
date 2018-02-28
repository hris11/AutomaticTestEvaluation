package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.inputModels.LoginUser;
import genchev.hristian.automatictestevaluation.models.User;

import javax.ws.rs.core.Response;

public interface AuthREST {
    Response login(LoginUser loginUser);

    Response logout();

    User register(User u);
}
