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

    public void insert(Blank blank) {
        blankRepository.insert(blank);
    }
}
