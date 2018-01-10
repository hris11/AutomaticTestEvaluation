package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "blanks")
public class Blank implements Serializable {

    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;

    @Column(nullable = false)
    private Integer numberOfAnswers;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "blank_id")
    private List<Answer> answers;

    @Column(name = "class_id")
    @JsonIgnore
    private Integer classId;

    public Blank() {}

    public Blank(Integer id, Integer numberOfAnswers, List<Answer> answers, Integer classId) {
        this.id = id;
        this.numberOfAnswers = numberOfAnswers;
        this.answers = answers;
        this.classId = classId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumberOfAnswers() {
        return numberOfAnswers;
    }

    public void setNumberOfAnswers(Integer numberOfAnswers) {
        this.numberOfAnswers = numberOfAnswers;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Blank)) return false;

        Blank blank = (Blank) o;

        if (getId() != null ? !getId().equals(blank.getId()) : blank.getId() != null) return false;
        if (getNumberOfAnswers() != null ? !getNumberOfAnswers().equals(blank.getNumberOfAnswers()) : blank.getNumberOfAnswers() != null)
            return false;
        if (getAnswers() != null ? !getAnswers().equals(blank.getAnswers()) : blank.getAnswers() != null) return false;
        return getClassId() != null ? getClassId().equals(blank.getClassId()) : blank.getClassId() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getNumberOfAnswers() != null ? getNumberOfAnswers().hashCode() : 0);
        result = 31 * result + (getAnswers() != null ? getAnswers().hashCode() : 0);
        result = 31 * result + (getClassId() != null ? getClassId().hashCode() : 0);
        return result;
    }
}
