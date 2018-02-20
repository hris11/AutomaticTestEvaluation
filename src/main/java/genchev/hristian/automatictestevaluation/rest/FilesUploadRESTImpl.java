package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import com.sun.jersey.core.header.ContentDisposition;
import com.sun.jersey.multipart.BodyPart;
import com.sun.jersey.multipart.FormDataBodyPart;
import com.sun.jersey.multipart.FormDataParam;
import genchev.hristian.automatictestevaluation.models.File;
import genchev.hristian.automatictestevaluation.services.FileUploadServiceImpl;
import org.apache.commons.io.IOUtils;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import java.io.*;

@Path("files")
public class FilesUploadRESTImpl implements FilesUploadREST {

    private FileUploadServiceImpl fileUploadService;

    @Inject
    public FilesUploadRESTImpl(FileUploadServiceImpl fileUploadService) {
        this.fileUploadService = fileUploadService;
    }

    @POST
    @Path("upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Override
    public void uploadMultiple(@FormDataParam("files") FormDataBodyPart body){
        for(BodyPart part : body.getParent().getBodyParts()){
            InputStream is = part.getEntityAs(InputStream.class);
            ContentDisposition meta = part.getContentDisposition();

            File file = null;
            try {
                byte[] bytes = IOUtils.toByteArray(is);
                file = new File();
                file.setFile(bytes);
                file.setFilename(meta.getFileName());
                file.setBlankId(15);
            } catch (IOException e) {
                e.printStackTrace();
            }

            if (file != null) {
                System.out.println("In if");
                fileUploadService.uploadFile(file);
            }
        }
    }
}
