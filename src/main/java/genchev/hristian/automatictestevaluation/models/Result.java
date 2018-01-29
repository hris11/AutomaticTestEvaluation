package genchev.hristian.automatictestevaluation.models;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "results")
public class Result implements Serializable {

    @JsonIgnore
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    private Integer id;

    @Column(nullable = false)
    private Integer studentId;

    @Column(nullable = false)
    private Integer blankId;

    @Column(nullable = false)
    private Double mark;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "result_id")
    private List<ResultAnswer> answers;

    public Result() {}

    public Result(Integer id, Integer studentId, Integer blankId, Double mark, List<ResultAnswer> answers) {
        this.id = id;
        this.studentId = studentId;
        this.blankId = blankId;
        this.mark = mark;
        this.answers = answers;
    }

    public List<ResultAnswer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<ResultAnswer> answers) {
        this.answers = answers;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public Integer getBlankId() {
        return blankId;
    }

    public void setBlankId(Integer blankId) {
        this.blankId = blankId;
    }

    public Double getMark() {
        return mark;
    }

    public void setMark(Double mark) {
        this.mark = mark;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Result)) return false;

        Result result = (Result) o;

        if (getId() != null ? !getId().equals(result.getId()) : result.getId() != null) return false;
        if (getStudentId() != null ? !getStudentId().equals(result.getStudentId()) : result.getStudentId() != null)
            return false;
        if (getBlankId() != null ? !getBlankId().equals(result.getBlankId()) : result.getBlankId() != null)
            return false;
        if (getMark() != null ? !getMark().equals(result.getMark()) : result.getMark() != null) return false;
        return getAnswers() != null ? getAnswers().equals(result.getAnswers()) : result.getAnswers() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getStudentId() != null ? getStudentId().hashCode() : 0);
        result = 31 * result + (getBlankId() != null ? getBlankId().hashCode() : 0);
        result = 31 * result + (getMark() != null ? getMark().hashCode() : 0);
        result = 31 * result + (getAnswers() != null ? getAnswers().hashCode() : 0);
        return result;
    }
}
