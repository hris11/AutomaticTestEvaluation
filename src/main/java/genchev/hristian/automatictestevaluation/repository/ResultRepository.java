package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.Result;

import javax.persistence.EntityManager;

public class ResultRepository implements RepositoryInterface<Result> {

    private EntityManager entityManager;

    @Inject
    public ResultRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void insert(Result result) {
        this.entityManager.getTransaction().begin();
        entityManager.persist(result);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void delete(Result result) {
        this.entityManager.getTransaction().begin();
        entityManager.remove(result);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void update(Result result) {
        this.entityManager.getTransaction().begin();
        entityManager.merge(result);
        this.entityManager.getTransaction().commit();
    }
}
