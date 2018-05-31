package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.persist.Transactional;
import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;
import genchev.hristian.automatictestevaluation.inputModels.ImageStringBase64;
import genchev.hristian.automatictestevaluation.services.ImageService;
import com.google.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.Base64;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("image")
public class ImageRESTImpl implements ImageREST {

    private ImageService imageService;

    @Inject
    public ImageRESTImpl(ImageService imageService) {
        this.imageService = imageService;
    }

    @POST
    @Path("upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Override
    public void uploadImage(@FormDataParam("file") InputStream inputStream,
                            @FormDataParam("file") FormDataContentDisposition fileDetail) throws Exception {

        System.out.println("uploadImage");
        imageService.StreamRec(inputStream, fileDetail);
    }
	
	@POST
	@Path("test")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response test(ImageStringBase64 data) throws Exception {
		System.out.println(data.getImage());
        byte[] decodedString = Base64.getDecoder().decode(new String(data.getImage()).getBytes("UTF-8"));
        imageService.uploadImage(decodedString);
		return Response.status(200).header("Access-Control-Allow-Origin", "*").build();
	}
	
}
