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
        entityManager.persist(file);
    }

    @Override
    public void delete(File file) {
        entityManager.remove(file);
    }

    @Override
    public void update(File file) {
        entityManager.merge(file);
    }

    public List<File> getAllMaterials(Integer blankId) {
        List<File> result;
        result = entityManager.createQuery("from File where blankid = :blankId", File.class)
                .setParameter("blankId", blankId)
                .getResultList();

        return result;
    }
}
