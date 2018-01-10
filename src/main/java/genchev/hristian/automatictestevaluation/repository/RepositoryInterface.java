package genchev.hristian.automatictestevaluation.repository;

public interface RepositoryInterface<T> {
    public void insert(T t);
    public void delete(T t);
    public void update(T t);
}
