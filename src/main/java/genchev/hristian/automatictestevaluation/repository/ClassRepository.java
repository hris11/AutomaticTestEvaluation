package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.Class;

import javax.persistence.EntityManager;
import java.util.List;

public class ClassRepository implements RepositoryInterface<Class>{

    private EntityManager entityManager;

    @Inject
    public ClassRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Class> findById(Integer user_id) {
        List<Class> result = null;

        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Class where user_id = :user_id", Class.class)
                .setParameter("user_id", user_id)
                .getResultList();
        this.entityManager.getTransaction().commit();

        return result;
    }

    @Override
    public void insert(Class aClass) {
        this.entityManager.getTransaction().begin();
        entityManager.persist(aClass);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void delete(Class aClass) {
        this.entityManager.getTransaction().begin();
        entityManager.remove(aClass);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void update(Class aClass) {
        this.entityManager.getTransaction().begin();
        entityManager.merge(aClass);
        this.entityManager.getTransaction().commit();
    }
}
