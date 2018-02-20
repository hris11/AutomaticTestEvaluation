package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import com.google.inject.persist.Transactional;
import genchev.hristian.automatictestevaluation.models.File;

import javax.persistence.EntityManager;


public class FileUploadRepository implements RepositoryInterface<File> {

    private EntityManager entityManager;

    @Inject
    public FileUploadRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void insert(File file) {
        entityManager.getTransaction().begin();
        System.out.println("in insert");
        entityManager.persist(file);
        entityManager.getTransaction().commit();
    }

    @Override
    public void delete(File file) {
        entityManager.remove(file);
    }

    @Override
    public void update(File file) {
        entityManager.merge(file);
    }
}
