package genchev.hristian.automatictestevaluation.inputModels;

import genchev.hristian.automatictestevaluation.models.Class;

import javax.inject.Inject;

public class NewClassInput {

    private InputEmail inputEmail;

    private Class newClass;

    public NewClassInput() {}

    @Inject
    public NewClassInput(InputEmail inputEmail, Class newClass) {
        this.inputEmail = inputEmail;
        this.newClass = newClass;
    }

    public InputEmail getInputEmail() {
        return inputEmail;
    }

    public void setInputEmail(InputEmail inputEmail) {
        this.inputEmail = inputEmail;
    }

    public Class getNewClass() {
        return newClass;
    }

    public void setNewClass(Class newClass) {
        this.newClass = newClass;
    }
}
