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

    @Column(name = "class_id")
    @JsonIgnore
    private Integer classId;

    public ClassInformation() {}

    public ClassInformation(Integer id, Date publishDate, String description, Integer score, Integer classId) {
        this.id = id;
        this.publishDate = publishDate;
        this.description = description;
        this.score = score;
        this.classId = classId;
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

    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ClassInformation)) return false;

        ClassInformation that = (ClassInformation) o;

        if (getId() != null ? !getId().equals(that.getId()) : that.getId() != null) return false;
        if (getPublishDate() != null ? !getPublishDate().equals(that.getPublishDate()) : that.getPublishDate() != null)
            return false;
        if (getDescription() != null ? !getDescription().equals(that.getDescription()) : that.getDescription() != null)
            return false;
        if (getScore() != null ? !getScore().equals(that.getScore()) : that.getScore() != null) return false;
        return getClassId() != null ? getClassId().equals(that.getClassId()) : that.getClassId() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getPublishDate() != null ? getPublishDate().hashCode() : 0);
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        result = 31 * result + (getScore() != null ? getScore().hashCode() : 0);
        result = 31 * result + (getClassId() != null ? getClassId().hashCode() : 0);
        return result;
    }
}
