package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.models.Blank;
import genchev.hristian.automatictestevaluation.repository.BlankRepository;
import com.google.inject.Inject;

import java.util.List;

public class BlankService {
    private BlankRepository blankRepository;

    @Inject
    public BlankService(BlankRepository blankRepository) {
        this.blankRepository = blankRepository;
    }

    public List<Blank> getClassBlanksByClassId(Integer classId) {
        return blankRepository.getClassBlanksByClassId(classId);
    }

    public Blank insert(Integer classId, Blank blank) {
        blank.setClassId(classId);
        blankRepository.insert(blank);
        return blankRepository.getBlankByClassIdAndBlankName(classId, blank);
    }

    public void deleteBlankById(Integer blankId) {
        Blank blank = blankRepository.getById(blankId);
        blankRepository.delete(blank);
    }

    public Blank getBlankById(Integer blankId) {
        return blankRepository.getById(blankId);
    }

    public List<Blank> getAllBlanks() {
        return blankRepository.getAllBlanks();
    }
}
