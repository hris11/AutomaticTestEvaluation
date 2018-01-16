package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.models.Blank;
import genchev.hristian.automatictestevaluation.repository.BlankRepository;

import javax.inject.Inject;
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

    public void insert(Integer classId, Blank blank) {
        blank.setClassId(classId);
        blankRepository.insert(blank);
    }

    public void deleteBlankById(Integer blankId) {
        Blank blank = blankRepository.getById(blankId);
        blankRepository.delete(blank);
    }
}
