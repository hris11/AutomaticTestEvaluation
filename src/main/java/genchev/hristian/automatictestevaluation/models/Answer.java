package genchev.hristian.automatictestevaluation.models;

public class Answer {
    /*group of answers, number of options, number of answer, right answer, ...*/
    private int id;
    private int group;
    private int options;
    private int index;
    private int rightAnswer;

    public Answer() {}

    public Answer(int id, int group, int options, int index, int rightAnswer) {
        this.id = id;
        this.group = group;
        this.options = options;
        this.index = index;
        this.rightAnswer = rightAnswer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getGroup() {
        return group;
    }

    public void setGroup(int group) {
        this.group = group;
    }

    public int getOptions() {
        return options;
    }

    public void setOptions(int options) {
        this.options = options;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public int getRightAnswer() {
        return rightAnswer;
    }

    public void setRightAnswer(int rightAnswer) {
        this.rightAnswer = rightAnswer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Answer)) return false;

        Answer answer = (Answer) o;

        if (getId() != answer.getId()) return false;
        if (getGroup() != answer.getGroup()) return false;
        if (getOptions() != answer.getOptions()) return false;
        if (getIndex() != answer.getIndex()) return false;
        return getRightAnswer() == answer.getRightAnswer();
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + getGroup();
        result = 31 * result + getOptions();
        result = 31 * result + getIndex();
        result = 31 * result + getRightAnswer();
        return result;
    }
}
