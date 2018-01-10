package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.User;
import java.util.List;
import javax.persistence.EntityManager;

public class UserRepository {

    private EntityManager entityManager;

    @Inject
    public UserRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void save(User object) {
        this.entityManager.getTransaction().begin();
        entityManager.persist(object);
        this.entityManager.getTransaction().commit();
    }

    public List<User> getUsers() {
        return entityManager.createQuery("from users", User.class).getResultList();
    }

    public List<User> findByEmail(User user) {
        return entityManager.createQuery("from users where name = :email", User.class)
                .setParameter("email", user.getEmail())
                .getResultList();
    }

}
