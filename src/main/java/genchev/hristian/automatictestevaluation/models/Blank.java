package genchev.hristian.automatictestevaluation.models;

import java.util.List;

public class Blank {
    /*number of answer fields, relation one to many with |Answers database|*/
    private int id;
    private int numberOfAnswers;
    private List<Answer> answers;

    public Blank() {}

    public Blank(int id, int numberOfAnswers, List<Answer> answers) {
        this.id = id;
        this.numberOfAnswers = numberOfAnswers;
        this.answers = answers;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumberOfAnswers() {
        return numberOfAnswers;
    }

    public void setNumberOfAnswers(int numberOfAnswers) {
        this.numberOfAnswers = numberOfAnswers;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Blank)) return false;

        Blank blank = (Blank) o;

        if (getId() != blank.getId()) return false;
        if (getNumberOfAnswers() != blank.getNumberOfAnswers()) return false;
        return getAnswers() != null ? getAnswers().equals(blank.getAnswers()) : blank.getAnswers() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + getNumberOfAnswers();
        result = 31 * result + (getAnswers() != null ? getAnswers().hashCode() : 0);
        return result;
    }
}
