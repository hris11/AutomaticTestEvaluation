package genchev.hristian.automatictestevaluation.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "classinformation")
public class ClassInformation {

    private int id;
    private Date publishDate;
    private String description;
    private int score;

    public ClassInformation() {}

    public ClassInformation(int id, Date publishDate, String description, int score) {
        this.id = id;
        this.publishDate = publishDate;
        this.description = description;
        this.score = score;
    }

    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
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
