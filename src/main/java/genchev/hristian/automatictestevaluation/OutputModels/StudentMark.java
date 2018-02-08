package genchev.hristian.automatictestevaluation.OutputModels;

public class StudentMark {

    private String name;

    private Double mark;

    public StudentMark() {}

    public StudentMark(String name, Double mark) {
        this.name = name;
        this.mark = mark;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
        if (!(o instanceof StudentMark)) return false;

        StudentMark that = (StudentMark) o;

        if (getName() != null ? !getName().equals(that.getName()) : that.getName() != null) return false;
        return getMark() != null ? getMark().equals(that.getMark()) : that.getMark() == null;
    }

    @Override
    public int hashCode() {
        int result = getName() != null ? getName().hashCode() : 0;
        result = 31 * result + (getMark() != null ? getMark().hashCode() : 0);
        return result;
    }
}
