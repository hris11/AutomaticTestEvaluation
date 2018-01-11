package genchev.hristian.automatictestevaluation.models;

public class GetClasses {
    private String email;

    public GetClasses() {}

    public GetClasses(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetClasses)) return false;

        GetClasses that = (GetClasses) o;

        return getEmail() != null ? getEmail().equals(that.getEmail()) : that.getEmail() == null;
    }

    @Override
    public int hashCode() {
        return getEmail() != null ? getEmail().hashCode() : 0;
    }
}
