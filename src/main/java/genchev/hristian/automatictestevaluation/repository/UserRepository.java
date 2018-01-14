package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.inputModels.LoginUser;
import genchev.hristian.automatictestevaluation.models.User;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;

public class UserRepository implements RepositoryInterface<User>{

    private EntityManager entityManager;

    @Inject
    public UserRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<User> getUsers() {
        List<User> result = new ArrayList<>();
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from User", User.class).getResultList();
        this.entityManager.getTransaction().commit();

        return result;
    }


    public List<User> findByEmail(String email) {

        List<User> result = new ArrayList<>();
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from User where email = :email", User.class)
                .setParameter("email", email)
                .getResultList();
        this.entityManager.getTransaction().commit();

        return result;
    }

    public boolean checkLogin(LoginUser loginUser) {
        List<User> result = new ArrayList<>();
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from User where email = :email and password = :password", User.class)
                .setParameter("email", loginUser.getEmail())
                .setParameter("password", loginUser.getPassword())
                .getResultList();
        this.entityManager.getTransaction().commit();

        return result.size() != 0;
    }

    @Override
    public void insert(User user) {
        this.entityManager.getTransaction().begin();
        entityManager.persist(user);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void delete(User user) {
        this.entityManager.getTransaction().begin();
        entityManager.remove(user);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void update(User user) {
        this.entityManager.getTransaction().begin();
        entityManager.merge(user);
        this.entityManager.getTransaction().commit();
    }
}
