package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "classinformation")
public class ClassInformation implements Serializable{
    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;
    @Temporal(TemporalType.DATE)
    @CreationTimestamp
    @Column(nullable = false)
    private Date publishDate;
    @Column(nullable = false, length = 200)
    private String description;
    @Column(nullable = false)
    private Integer score;

    public ClassInformation() {}

    public ClassInformation(Integer id, Date publishDate, String description, Integer score) {
        this.id = id;
        this.publishDate = publishDate;
        this.description = description;
        this.score = score;
    }

    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ClassInformation)) return false;

        ClassInformation that = (ClassInformation) o;

        if (getId() != that.getId()) return false;
        if (getScore() != that.getScore()) return false;
        if (getPublishDate() != null ? !getPublishDate().equals(that.getPublishDate()) : that.getPublishDate() != null)
            return false;
        return getDescription() != null ? getDescription().equals(that.getDescription()) : that.getDescription() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getPublishDate() != null ? getPublishDate().hashCode() : 0);
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        result = 31 * result + getScore();
        return result;
    }
}
