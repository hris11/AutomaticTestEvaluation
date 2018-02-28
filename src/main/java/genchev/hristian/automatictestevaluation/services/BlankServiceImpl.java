package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.models.Blank;
import genchev.hristian.automatictestevaluation.repository.BlankRepository;
import com.google.inject.Inject;

import java.util.List;

public class BlankServiceImpl implements BlankService {
    private BlankRepository blankRepository;

    @Inject
    public BlankServiceImpl(BlankRepository blankRepository) {
        this.blankRepository = blankRepository;
    }

    @Override
    public List<Blank> getClassBlanksByClassId(Integer classId) {
        return blankRepository.getClassBlanksByClassId(classId);
    }

    @Override
    public Blank insert(Integer classId, Blank blank) {
        blank.setClassId(classId);
        blankRepository.insert(blank);
        return blankRepository.getBlankByClassIdAndBlankName(classId, blank);
    }

    @Override
    public void deleteBlankById(Integer blankId) {
        Blank blank = blankRepository.getById(blankId);
        blankRepository.delete(blank);
    }

    @Override
    public Blank getBlankById(Integer blankId) {
        return blankRepository.getById(blankId);
    }

    @Override
    public List<Blank> getAllBlanks() {
        return blankRepository.getAllBlanks();
    }
}
