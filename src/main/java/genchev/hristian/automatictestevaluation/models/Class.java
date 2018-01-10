package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "classes")
public class Class implements Serializable {

    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;

    @Column(nullable = false, length = 30)
    private String name;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "class_id")
    private List<Student> students;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "class_id")
    private List<ClassInformation> classInformation;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "class_id")
    private List<Blank> blanks;

    @Column(name = "user_id")
    @JsonIgnore
    private Integer userId;

    public Class() {}

    public Class(Integer id, String name, List<Student> students, List<ClassInformation> classInformation, List<Blank> blanks, Integer userId) {
        this.id = id;
        this.name = name;
        this.students = students;
        this.classInformation = classInformation;
        this.blanks = blanks;
        this.userId = userId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public List<ClassInformation> getClassInformation() {
        return classInformation;
    }

    public void setClassInformation(List<ClassInformation> classInformation) {
        this.classInformation = classInformation;
    }

    public List<Blank> getBlanks() {
        return blanks;
    }

    public void setBlanks(List<Blank> blanks) {
        this.blanks = blanks;
    }


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Class)) return false;

        Class aClass = (Class) o;

        if (getId() != null ? !getId().equals(aClass.getId()) : aClass.getId() != null) return false;
        if (getName() != null ? !getName().equals(aClass.getName()) : aClass.getName() != null) return false;
        if (getStudents() != null ? !getStudents().equals(aClass.getStudents()) : aClass.getStudents() != null)
            return false;
        if (getClassInformation() != null ? !getClassInformation().equals(aClass.getClassInformation()) : aClass.getClassInformation() != null)
            return false;
        if (getBlanks() != null ? !getBlanks().equals(aClass.getBlanks()) : aClass.getBlanks() != null) return false;
        return getUserId() != null ? getUserId().equals(aClass.getUserId()) : aClass.getUserId() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getName() != null ? getName().hashCode() : 0);
        result = 31 * result + (getStudents() != null ? getStudents().hashCode() : 0);
        result = 31 * result + (getClassInformation() != null ? getClassInformation().hashCode() : 0);
        result = 31 * result + (getBlanks() != null ? getBlanks().hashCode() : 0);
        result = 31 * result + (getUserId() != null ? getUserId().hashCode() : 0);
        return result;
    }
}
