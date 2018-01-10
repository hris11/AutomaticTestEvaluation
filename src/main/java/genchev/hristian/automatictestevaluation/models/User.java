package genchev.hristian.automatictestevaluation.models;

import java.io.Serializable;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.ws.rs.Consumes;
import java.util.List;

@Entity
@Table(name = "users")
public class User implements Serializable {


    /*email, password, first name, last name, relation one to many with |Classes database|*/
    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;
    @Column(nullable = false, length = 50)
    private String email;
    @Column(nullable = false, length = 30)
    private String password;
    @Column( nullable = false, length = 30)
    private String firstName;
    @Column(nullable = false, length = 30)
    private String lastName;
    /*@OneToMany
    @JoinColumn(name = "id")
    private List<Class> classes;*/

    public User() {}

    public User(Integer id, String email, String password, String firstName, String lastName, List<Class> classes) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
//        this.classes = classes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /*public List<Class> getClasses() {
        return classes;
    }

    public void setClasses(List<Class> classes) {
        this.classes = classes;
    }*/

    /*@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;

        User user = (User) o;

        if (getId() != user.getId()) return false;
        if (getEmail() != null ? !getEmail().equals(user.getEmail()) : user.getEmail() != null) return false;
        if (getPassword() != null ? !getPassword().equals(user.getPassword()) : user.getPassword() != null)
            return false;
        if (getFirstName() != null ? !getFirstName().equals(user.getFirstName()) : user.getFirstName() != null)
            return false;
        if (getLastName() != null ? !getLastName().equals(user.getLastName()) : user.getLastName() != null)
            return false;
        return getClasses() != null ? getClasses().equals(user.getClasses()) : user.getClasses() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getEmail() != null ? getEmail().hashCode() : 0);
        result = 31 * result + (getPassword() != null ? getPassword().hashCode() : 0);
        result = 31 * result + (getFirstName() != null ? getFirstName().hashCode() : 0);
        result = 31 * result + (getLastName() != null ? getLastName().hashCode() : 0);
        result = 31 * result + (getClasses() != null ? getClasses().hashCode() : 0);
        return result;
    }*/
}
