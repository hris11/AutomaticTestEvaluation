package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.models.Result;

import javax.persistence.EntityManager;
import java.util.List;

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

    public Result getStudentResult(Integer blankId, Integer studentId) {
        Result result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Result where blankid = :blankId and studentid = :studentId", Result.class)
                .setParameter("blankId", blankId)
                .setParameter("studentId", studentId)
                .getSingleResult();
        this.entityManager.getTransaction().commit();
        return result;
    }

    public List<Result> getBlankResult(Integer blankId) {
        List<Result> result;
        this.entityManager.getTransaction().begin();
        result = entityManager.createQuery("from Result where blankid = :blankId", Result.class)
                .setParameter("blankId", blankId)
                .getResultList();
        this.entityManager.getTransaction().commit();
        return result;
    }

    public Double getAverageMarkFromBlank(Integer blankId) {
        List<Result> blanks = getBlankResult(blankId);
        Double sum = 0.0;
        if (blanks.size() > 0) {
            for (Result blank : blanks) {
                sum += blank.getMark();
            }

            return (sum / (double)blanks.size());
        }
        return sum;
    }

    public BlankMarks getBlankmarks(Integer blankId) {       
        BlankMarks blankMarks;

        this.entityManager.getTransaction().begin();
        blankMarks = entityManager.createQuery(
                "SELECT NEW genchev.hristian.automatictestevaluation.OutputModels.BlankMarks(" +
                "  COUNT(CASE WHEN r.mark >= 2 AND r.mark < 3 then 2 end) as mark2," +
                "  COUNT(CASE WHEN r.mark >= 3 AND r.mark < 3.5 then 3 end) as mark3," +
                "  COUNT(CASE WHEN r.mark >= 3.5 AND r.mark < 4.5 then 4 end) as mark4," +
                "  COUNT(CASE WHEN r.mark >= 4.5 AND r.mark < 5.5 then 5 end) as mark5," +
                "  COUNT(CASE WHEN r.mark >= 5.5 then 6 end) as mark6) " +
                "FROM Result r WHERE blankid = :blank_id", BlankMarks.class)
                .setParameter("blank_id", blankId)
                .getSingleResult();

        this.entityManager.getTransaction().commit();
        return  blankMarks;
    }
}
