package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.Blank;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

public class BlankRepository implements RepositoryInterface<Blank> {

    private EntityManager entityManager;

    @Inject
    public BlankRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Blank> getClassBlanksByClassId(Integer classId) {
        List<Blank> result = new ArrayList<>();

        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Blank where class_id = :class_id", Blank.class)
                .setParameter("class_id", classId)
                .getResultList();
        this.entityManager.getTransaction().commit();

        return result;
    }

    @Override
    public void insert(Blank blank) {
        this.entityManager.getTransaction().begin();
        entityManager.persist(blank);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void delete(Blank blank) {
        this.entityManager.getTransaction().begin();
        entityManager.remove(blank);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void update(Blank blank) {
        this.entityManager.getTransaction().begin();
        entityManager.merge(blank);
        this.entityManager.getTransaction().commit();
    }

    public Blank getById(Integer blankId) {
        Blank result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Blank where id = :blank_id", Blank.class)
                .setParameter("blank_id", blankId)
                .getSingleResult();
        this.entityManager.getTransaction().commit();

        return result;
    }

    public Blank getBlankByClassIdAndBlankName(Integer classId, Blank blank) {
        Blank result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Blank where class_id = :class_id and name = :name", Blank.class)
                .setParameter("class_id", classId)
                .setParameter("name", blank.getName())
                .getSingleResult();
        this.entityManager.getTransaction().commit();

        return result;
    }

    public List<Blank> getAllBlanks() {
        List<Blank> result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Blank", Blank.class)
                .getResultList();
        this.entityManager.getTransaction().commit();

        for (Blank blank : result) {
            System.out.println(blank.getId());
        }
        return result;
    }
}
