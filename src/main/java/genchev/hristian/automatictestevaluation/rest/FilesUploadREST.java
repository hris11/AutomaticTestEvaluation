package genchev.hristian.automatictestevaluation.rest;

import com.sun.jersey.multipart.FormDataBodyPart;
import com.sun.jersey.multipart.FormDataParam;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

public interface FilesUploadREST {
    void uploadMultiple(FormDataBodyPart body, Integer blankId);
}
