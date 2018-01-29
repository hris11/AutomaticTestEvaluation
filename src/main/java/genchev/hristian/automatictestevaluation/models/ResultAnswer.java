package genchev.hristian.automatictestevaluation.models;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "resultanswers")
public class ResultAnswer implements Serializable {

    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;

    @Column(nullable = false)
    private Integer index;


    @Column(nullable = false)
    private Boolean correct;

    @Column(name = "result_id")
    private Integer resultId;

    public ResultAnswer() {}

    public ResultAnswer(Integer index, Boolean correct, Integer resultId) {
        this.index = index;
        this.correct = correct;
        this.resultId = resultId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }


    public Integer getResultId() {
        return resultId;
    }

    public void setResultId(Integer resultId) {
        this.resultId = resultId;
    }


    public Boolean getCorrect() {
        return correct;
    }

    public void setCorrect(Boolean correct) {
        this.correct = correct;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ResultAnswer)) return false;

        ResultAnswer that = (ResultAnswer) o;

        if (getId() != null ? !getId().equals(that.getId()) : that.getId() != null) return false;
        if (getIndex() != null ? !getIndex().equals(that.getIndex()) : that.getIndex() != null) return false;
        if (getCorrect() != null ? !getCorrect().equals(that.getCorrect()) : that.getCorrect() != null) return false;
        return getResultId() != null ? getResultId().equals(that.getResultId()) : that.getResultId() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getIndex() != null ? getIndex().hashCode() : 0);
        result = 31 * result + (getCorrect() != null ? getCorrect().hashCode() : 0);
        result = 31 * result + (getResultId() != null ? getResultId().hashCode() : 0);
        return result;
    }
}
