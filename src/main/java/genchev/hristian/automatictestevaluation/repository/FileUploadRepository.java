package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import com.google.inject.persist.Transactional;
import genchev.hristian.automatictestevaluation.OutputModels.DisplayMaterial;
import genchev.hristian.automatictestevaluation.models.File;

import javax.persistence.EntityManager;
import java.util.List;


public class FileUploadRepository implements RepositoryInterface<File> {

    private EntityManager entityManager;

    @Inject
    public FileUploadRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void insert(File file) {
        this.entityManager.getTransaction().begin();
        entityManager.persist(file);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void delete(File file) {
        this.entityManager.getTransaction().begin();
        entityManager.remove(file);
        this.entityManager.getTransaction().commit();
    }

    @Override
    public void update(File file) {
        this.entityManager.getTransaction().begin();
        entityManager.merge(file);
        this.entityManager.getTransaction().commit();
    }

    public List<File> getAllMaterials(Integer blankId) {
        List<File> result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from File where blank_id = :blankId", File.class)
                .setParameter("blankId", blankId)
                .getResultList();
        this.entityManager.getTransaction().commit();
        return result;
    }

    public File getMaterial(Integer materialId) {
        File file = null;
        this.entityManager.getTransaction().begin();
        file =  entityManager.createQuery("from File where id = :material_id", File.class)
                .setParameter("material_id", materialId)
                .getSingleResult();
        this.entityManager.getTransaction().commit();
        return file;
    }
}
