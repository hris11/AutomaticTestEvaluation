package genchev.hristian.automatictestevaluation.models;

public class Student {

    /*first name, last name, number in class, average marks, ...*/

    private int id;
    private String firstName;
    private String lastName;
    private int number;
    private double averageMark;

    public Student() {}

    public Student(int id, String firstName, String lastName, int number, double averageMark) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
        this.averageMark = averageMark;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public double getAverageMark() {
        return averageMark;
    }

    public void setAverageMark(double averageMark) {
        this.averageMark = averageMark;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Student)) return false;

        Student student = (Student) o;

        if (getId() != student.getId()) return false;
        if (getNumber() != student.getNumber()) return false;
        if (Double.compare(student.getAverageMark(), getAverageMark()) != 0) return false;
        if (getFirstName() != null ? !getFirstName().equals(student.getFirstName()) : student.getFirstName() != null)
            return false;
        return getLastName() != null ? getLastName().equals(student.getLastName()) : student.getLastName() == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = getId();
        result = 31 * result + (getFirstName() != null ? getFirstName().hashCode() : 0);
        result = 31 * result + (getLastName() != null ? getLastName().hashCode() : 0);
        result = 31 * result + getNumber();
        temp = Double.doubleToLongBits(getAverageMark());
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }
}
