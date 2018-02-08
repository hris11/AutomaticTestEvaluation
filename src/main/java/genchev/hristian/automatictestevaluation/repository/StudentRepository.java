package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.Student;
import genchev.hristian.automatictestevaluation.models.User;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

public class StudentRepository implements RepositoryInterface<Student>{
    private EntityManager entityManager;

    @Inject
    public StudentRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void insert(Student student) {
        this.entityManager.getTransaction().begin();
        entityManager.persist(student);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void delete(Student student) {
        this.entityManager.getTransaction().begin();
        entityManager.remove(student);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void update(Student student) {
        this.entityManager.getTransaction().begin();
        entityManager.merge(student);
        this.entityManager.getTransaction().commit();
    }

    public List<Student> getStudetnsById(Integer id) {
        List<Student> result = new ArrayList<>();
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Student where class_id = :class_id", Student.class)
                .setParameter("class_id", id)
                .getResultList();
        this.entityManager.getTransaction().commit();

        return result;
    }

    public Student getStudentByHisId(Integer studentId) {
        Student result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Student where id = :id", Student.class)
                .setParameter("id", studentId)
                .getSingleResult();
        this.entityManager.getTransaction().commit();

        return result;
    }

}
