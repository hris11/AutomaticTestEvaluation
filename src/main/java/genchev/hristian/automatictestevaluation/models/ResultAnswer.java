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
    private Integer chosenOpsion;

    @Column(name = "result_id")
    private Integer resultId;

    public ResultAnswer() {}

    public ResultAnswer(Integer id, Integer index, Integer chosenOpsion, Integer resultId) {
        this.id = id;
        this.index = index;
        this.chosenOpsion = chosenOpsion;
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

    public Integer getChosenOpsion() {
        return chosenOpsion;
    }

    public void setChosenOpsion(Integer chosenOpsion) {
        this.chosenOpsion = chosenOpsion;
    }

    public Integer getResultId() {
        return resultId;
    }

    public void setResultId(Integer resultId) {
        this.resultId = resultId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ResultAnswer)) return false;

        ResultAnswer that = (ResultAnswer) o;

        if (getId() != null ? !getId().equals(that.getId()) : that.getId() != null) return false;
        if (getIndex() != null ? !getIndex().equals(that.getIndex()) : that.getIndex() != null) return false;
        if (getChosenOpsion() != null ? !getChosenOpsion().equals(that.getChosenOpsion()) : that.getChosenOpsion() != null)
            return false;
        return getResultId() != null ? getResultId().equals(that.getResultId()) : that.getResultId() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getIndex() != null ? getIndex().hashCode() : 0);
        result = 31 * result + (getChosenOpsion() != null ? getChosenOpsion().hashCode() : 0);
        result = 31 * result + (getResultId() != null ? getResultId().hashCode() : 0);
        return result;
    }
}
