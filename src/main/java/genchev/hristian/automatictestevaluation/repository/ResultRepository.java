package genchev.hristian.automatictestevaluation.repository;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.models.Result;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Transactional
public class ResultRepository implements RepositoryInterface<Result> {

    private EntityManager entityManager;

    @Inject
    public ResultRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void insert(Result result) {
        entityManager.persist(result);
    }

    @Override
    public void delete(Result result) {
        entityManager.remove(result);
    }

    @Override
    public void update(Result result) {
        entityManager.merge(result);
    }

    public Result getStudentResult(Integer blankId, Integer studentId) {
        Result result;
        result = entityManager.createQuery("from Result where blankid = :blankId and studentid = :studentId", Result.class)
                .setParameter("blankId", blankId)
                .setParameter("studentId", studentId)
                .getSingleResult();

        return result;
    }

    public List<Result> getBlankResult(Integer blankId) {
        List<Result> result;
        result = entityManager.createQuery("from Result where blankid = :blankId", Result.class)
                .setParameter("blankId", blankId)
                .getResultList();

        return result;
    }

    public BlankMarks getBlankmarks(Integer blankId) {
        BlankMarks blankMarks;

        blankMarks = entityManager.createQuery("SELECT" +
                "  COUNT(CASE WHEN r.mark >= 2 AND r.mark < 3 then 2 end) as mark2," +
                "  COUNT(CASE WHEN r.mark >= 3 AND r.mark < 3.5 then 3 end) as mark3," +
                "  COUNT(CASE WHEN r.mark >= 3.5 AND r.mark < 4.5 then 4 end) as mark4," +
                "  COUNT(CASE WHEN r.mark >= 4.5 AND r.mark < 5.5 then 5 end) as mark5," +
                "  COUNT(CASE WHEN r.mark >= 5.5 then 6 end) as mark6 " +
                "FROM Result r", BlankMarks.class)
                .getSingleResult();

        return  blankMarks;
    }
}
