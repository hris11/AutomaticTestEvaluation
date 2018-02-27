package genchev.hristian.automatictestevaluation.OutputModels;

import java.util.Objects;

public class DisplayMaterial {
    private String name;

    private Integer id;

    public DisplayMaterial() {}

    public DisplayMaterial(String name, Integer id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DisplayMaterial that = (DisplayMaterial) o;
        return Objects.equals(name, that.name) &&
                Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(name, id);
    }
}
