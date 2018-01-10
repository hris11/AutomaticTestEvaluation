package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "answers")
public class Answer implements Serializable {

    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;
    
    @Column(nullable = false)
    private Integer groups;
    
    @Column(nullable = false)
    private Integer options;
    
    @Column(nullable = false)
    private Integer index;
    
    @Column(nullable = false)
    private Integer rightAnswer;

    @Column(name = "blank_id")
    @JsonIgnore
    private Integer blankId;

    public Answer() {}

    public Answer(Integer id, Integer groups, Integer options, Integer index, Integer rightAnswer, Integer blankId) {
        this.id = id;
        this.groups = groups;
        this.options = options;
        this.index = index;
        this.rightAnswer = rightAnswer;
        this.blankId = blankId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGroup() {
        return groups;
    }

    public void setGroup(Integer groups) {
        this.groups = groups;
    }

    public Integer getOptions() {
        return options;
    }

    public void setOptions(Integer options) {
        this.options = options;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public Integer getRightAnswer() {
        return rightAnswer;
    }

    public void setRightAnswer(Integer rightAnswer) {
        this.rightAnswer = rightAnswer;
    }

    public Integer getBlankId() {
        return blankId;
    }

    public void setBlankId(Integer blankId) {
        this.blankId = blankId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Answer)) return false;

        Answer answer = (Answer) o;

        if (getId() != null ? !getId().equals(answer.getId()) : answer.getId() != null) return false;
        if (groups != null ? !groups.equals(answer.groups) : answer.groups != null) return false;
        if (getOptions() != null ? !getOptions().equals(answer.getOptions()) : answer.getOptions() != null)
            return false;
        if (getIndex() != null ? !getIndex().equals(answer.getIndex()) : answer.getIndex() != null) return false;
        if (getRightAnswer() != null ? !getRightAnswer().equals(answer.getRightAnswer()) : answer.getRightAnswer() != null)
            return false;
        return getBlankId() != null ? getBlankId().equals(answer.getBlankId()) : answer.getBlankId() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (groups != null ? groups.hashCode() : 0);
        result = 31 * result + (getOptions() != null ? getOptions().hashCode() : 0);
        result = 31 * result + (getIndex() != null ? getIndex().hashCode() : 0);
        result = 31 * result + (getRightAnswer() != null ? getRightAnswer().hashCode() : 0);
        result = 31 * result + (getBlankId() != null ? getBlankId().hashCode() : 0);
        return result;
    }
}
