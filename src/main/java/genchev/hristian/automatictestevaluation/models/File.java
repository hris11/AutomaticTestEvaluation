package genchev.hristian.automatictestevaluation.models;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "files")
public class File {
    @JsonIgnore
    @Id
    @GeneratedValue(generator="increment")
    @GenericGenerator(name="increment", strategy = "increment")
    private Integer id;

    @Column(nullable = false)
    private byte[] file;

    @Column(nullable = false)
    private String filename;

    @Column(name = "blank_id")
    @JsonIgnore
    private Integer blankId;

    public File() {
    }

    public File(byte[] file, String filename, Integer blankId) {
        this.file = file;
        this.filename = filename;
        this.blankId = blankId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public Integer getBlankId() {
        return blankId;
    }

    public void setBlankId(Integer blankId) {
        this.blankId = blankId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof File)) return false;

        File file1 = (File) o;

        if (getId() != null ? !getId().equals(file1.getId()) : file1.getId() != null) return false;
        if (!Arrays.equals(getFile(), file1.getFile())) return false;
        if (getFilename() != null ? !getFilename().equals(file1.getFilename()) : file1.getFilename() != null)
            return false;
        return getBlankId() != null ? getBlankId().equals(file1.getBlankId()) : file1.getBlankId() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + Arrays.hashCode(getFile());
        result = 31 * result + (getFilename() != null ? getFilename().hashCode() : 0);
        result = 31 * result + (getBlankId() != null ? getBlankId().hashCode() : 0);
        return result;
    }
}
