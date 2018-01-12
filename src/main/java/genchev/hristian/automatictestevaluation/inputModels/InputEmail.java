package genchev.hristian.automatictestevaluation.inputModels;

public class InputEmail {

    private String email;

    public InputEmail() {}

    public InputEmail(String email) {
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
        if (!(o instanceof InputEmail)) return false;

        InputEmail that = (InputEmail) o;

        return getEmail() != null ? getEmail().equals(that.getEmail()) : that.getEmail() == null;
    }

    @Override
    public int hashCode() {
        return getEmail() != null ? getEmail().hashCode() : 0;
    }
}
