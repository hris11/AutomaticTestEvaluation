package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "classes")
public class Class implements Serializable {
   /* relation one to many with |Students database|, class name, rel
            ation one to many with |Class information database|, relation one to
    many with |Blanks database|*/
    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;
    @Column(nullable = false, length = 30)
    private String name;
    @OneToMany
    @JoinColumn(name = "id")
    private List<Student> students;
    @OneToMany
    @JoinColumn(name = "id")
    private List<ClassInformation> classInformation;
    @OneToMany
    @JoinColumn(name = "id")
    private List<Blank> blanks;

    public Class() {}

    public Class(Integer id, String name, List<Student> students, List<ClassInformation> classInformation, List<Blank> blanks) {
        this.id = id;
        this.name = name;
        this.students = students;
        this.classInformation = classInformation;
        this.blanks = blanks;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Class)) return false;

        Class aClass = (Class) o;

        if (getId() != aClass.getId()) return false;
        if (getName() != null ? !getName().equals(aClass.getName()) : aClass.getName() != null) return false;
        if (getStudents() != null ? !getStudents().equals(aClass.getStudents()) : aClass.getStudents() != null)
            return false;
        if (getClassInformation() != null ? !getClassInformation().equals(aClass.getClassInformation()) : aClass.getClassInformation() != null)
            return false;
        return getBlanks() != null ? getBlanks().equals(aClass.getBlanks()) : aClass.getBlanks() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getName() != null ? getName().hashCode() : 0);
        result = 31 * result + (getStudents() != null ? getStudents().hashCode() : 0);
        result = 31 * result + (getClassInformation() != null ? getClassInformation().hashCode() : 0);
        result = 31 * result + (getBlanks() != null ? getBlanks().hashCode() : 0);
        return result;
    }
}
