package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "blanks")
public class Blank implements Serializable {
    /*number of answer fields, relation one to many with |Answers database|*/
    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;
    @Column(nullable = false)
    private Integer numberOfAnswers;
    @OneToMany
    @JoinColumn(name = "id")
    private List<Answer> answers;

    public Blank() {}

    public Blank(Integer id, Integer numberOfAnswers, List<Answer> answers) {
        this.id = id;
        this.numberOfAnswers = numberOfAnswers;
        this.answers = answers;
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
