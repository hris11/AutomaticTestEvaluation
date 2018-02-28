package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.models.Blank;

import java.util.List;

public interface BlankService {
    List<Blank> getClassBlanksByClassId(Integer classId);

    Blank insert(Integer classId, Blank blank);

    void deleteBlankById(Integer blankId);

    Blank getBlankById(Integer blankId);

    List<Blank> getAllBlanks();
}
