package genchev.hristian.automatictestevaluation.inputModels;

import genchev.hristian.automatictestevaluation.models.Student;

import javax.inject.Inject;

public class NewStudentInput {

    private NewClassInput newClassInput;

    private Student newStudent;

    public NewStudentInput() {}

    @Inject
    public NewStudentInput(NewClassInput newClassInput, Student newStudent) {
        this.newClassInput = newClassInput;
        this.newStudent = newStudent;
    }

    public NewClassInput getNewClassInput() {
        return newClassInput;
    }

    public void setNewClassInput(NewClassInput newClassInput) {
        this.newClassInput = newClassInput;
    }

    public Student getNewStudent() {
        return newStudent;
    }

    public void setNewStudent(Student newStudent) {
        this.newStudent = newStudent;
    }
}
