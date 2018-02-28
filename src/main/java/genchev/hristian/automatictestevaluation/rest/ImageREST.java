package genchev.hristian.automatictestevaluation.rest;

import com.sun.jersey.core.header.FormDataContentDisposition;

import java.io.InputStream;

public interface ImageREST {
    void uploadImage(InputStream inputStream, FormDataContentDisposition fileDetail) throws Exception;
}
