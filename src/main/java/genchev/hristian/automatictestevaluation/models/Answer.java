package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "answers")
public class Answer implements Serializable {
    /*group of answers, number of options, number of answer, right answer, ...*/
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

    public Answer() {}

    public Answer(Integer id, Integer groups, Integer options, Integer index, Integer rightAnswer) {
        this.id = id;
        this.groups = groups;
        this.options = options;
        this.index = index;
        this.rightAnswer = rightAnswer;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Answer)) return false;

        Answer answer = (Answer) o;

        if (getId().compareTo(answer.getId()) != 0) return false;
        if (getGroup().compareTo(answer.getGroup()) != 0) return false;
        if (getOptions().compareTo(answer.getOptions()) != 0) return false;
        if (getIndex().compareTo(answer.getIndex()) != 0) return false;
        return getRightAnswer().compareTo(answer.getRightAnswer()) == 0;
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
