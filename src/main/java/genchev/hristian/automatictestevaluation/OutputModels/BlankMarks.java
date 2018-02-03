package genchev.hristian.automatictestevaluation.OutputModels;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BlankMarks {

    @Column
    private Integer mark2;

    @Column
    private Integer mark3;

    @Column
    private Integer mark4;

    @Column
    private Integer mark5;

    @Column
    private Integer mark6;

    public BlankMarks() {}

    public BlankMarks(Integer mark2, Integer mark3, Integer mark4, Integer mark5, Integer mark6) {
        this.mark2 = mark2;
        this.mark3 = mark3;
        this.mark4 = mark4;
        this.mark5 = mark5;
        this.mark6 = mark6;
    }

    public Integer getMark6() {
        return mark6;
    }

    public void setMark6(Integer mark6) {
        this.mark6 = mark6;
    }

    public Integer getMark2() {
        return mark2;
    }

    public void setMark2(Integer mark2) {
        this.mark2 = mark2;
    }

    public Integer getMark3() {
        return mark3;
    }

    public void setMark3(Integer mark3) {
        this.mark3 = mark3;
    }

    public Integer getMark4() {
        return mark4;
    }

    public void setMark4(Integer mark4) {
        this.mark4 = mark4;
    }

    public Integer getMark5() {
        return mark5;
    }

    public void setMark5(Integer mark5) {
        this.mark5 = mark5;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof BlankMarks)) return false;

        BlankMarks that = (BlankMarks) o;

        if (getMark2() != null ? !getMark2().equals(that.getMark2()) : that.getMark2() != null) return false;
        if (getMark3() != null ? !getMark3().equals(that.getMark3()) : that.getMark3() != null) return false;
        if (getMark4() != null ? !getMark4().equals(that.getMark4()) : that.getMark4() != null) return false;
        if (getMark5() != null ? !getMark5().equals(that.getMark5()) : that.getMark5() != null) return false;
        return getMark6() != null ? getMark6().equals(that.getMark6()) : that.getMark6() == null;
    }

    @Override
    public int hashCode() {
        int result = getMark2() != null ? getMark2().hashCode() : 0;
        result = 31 * result + (getMark3() != null ? getMark3().hashCode() : 0);
        result = 31 * result + (getMark4() != null ? getMark4().hashCode() : 0);
        result = 31 * result + (getMark5() != null ? getMark5().hashCode() : 0);
        result = 31 * result + (getMark6() != null ? getMark6().hashCode() : 0);
        return result;
    }
}
