package genchev.hristian.automatictestevaluation.OutputModels;

public class ClassMarks {

    private String className;

    private Double averageMark;

    public ClassMarks() {
    }

    public ClassMarks(String className, Double averageMark) {
        this.className = className;
        this.averageMark = averageMark;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public Double getAverageMark() {
        return averageMark;
    }

    public void setAverageMark(Double averageMark) {
        this.averageMark = averageMark;
    }
}
