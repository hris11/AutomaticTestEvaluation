package genchev.hristian.automatictestevaluation.rest;

import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;
import genchev.hristian.automatictestevaluation.services.ImageService;
import com.google.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import java.io.IOException;
import java.io.InputStream;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("image")
public class ImageREST {

    private ImageService imageService;

    @Inject
    public ImageREST(ImageService imageService) {
        this.imageService = imageService;
    }

    @POST
    @Path("upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public void uploadImage(@FormDataParam("file") InputStream inputStream,
                            @FormDataParam("file") FormDataContentDisposition fileDetail) throws Exception {

        System.out.println("uploadImage");
        imageService.uploadImage(inputStream, fileDetail);
    }
}
