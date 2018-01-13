package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.Class;
import org.hibernate.query.Query;

import javax.persistence.EntityManager;
import java.util.List;

public class ClassRepository implements RepositoryInterface<Class>{

    private EntityManager entityManager;

    @Inject
    public ClassRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Class> findByUserId(Integer user_id) {
        List<Class> result = null;

        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Class where user_id = :user_id", Class.class)
                .setParameter("user_id", user_id)
                .getResultList();
        this.entityManager.getTransaction().commit();

        return result;
    }

    public Class findByIdAndName(Integer userId, String className) {
        Class result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Class where user_id = :user_id and name = :className", Class.class)
                .setParameter("user_id", userId)
                .setParameter("className", className)
                .getSingleResult();
        this.entityManager.getTransaction().commit();

        return result;
    }

    public Class findById(Integer id) {
        Class result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Class where id = :id", Class.class)
                .setParameter("id", id)
                .getSingleResult();
        this.entityManager.getTransaction().commit();

        return result;
    }

    public void deleteById(Integer id) {
        this.entityManager.getTransaction().begin();
        entityManager.createQuery("delete Class where id = :id")
                .setParameter("id", id)
                .executeUpdate();
        this.entityManager.getTransaction().commit();
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
