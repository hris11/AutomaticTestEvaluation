package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.BlankMarks;
import genchev.hristian.automatictestevaluation.models.Result;
import genchev.hristian.automatictestevaluation.repository.ResultRepository;

import java.util.List;

public class ResultServiceImpl implements ResultService {

    private ResultRepository resultRepository;

    @Inject
    public ResultServiceImpl(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    @Override
    public Result getStudentResult(Integer blankId, Integer studentId) {
        return resultRepository.getStudentResult(blankId, studentId);
    }

    @Override
    public List<Result> getBlankResult(Integer blankId) {
        return resultRepository.getBlankResult(blankId);
    }

    @Override
    public BlankMarks getBlankMarks(Integer blankId) {
        return resultRepository.getBlankmarks(blankId);
    }
}
