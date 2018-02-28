package genchev.hristian.automatictestevaluation.rest;

import genchev.hristian.automatictestevaluation.models.Blank;

import javax.ws.rs.PathParam;
import java.util.List;

public interface BlankREST {

    List<Blank> getClassBlanksById(Integer classId);

    List<Blank> getAllBlanks();

    Blank getBlankById(Integer blankId);

    Blank createNewBlank(Integer classId, Blank blank);

    void deleteBlankById(Integer blank_id);
}
