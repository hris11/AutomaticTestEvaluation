package genchev.hristian.automatictestevaluation.rest;

import com.google.inject.Inject;
import com.sun.jersey.core.header.ContentDisposition;
import com.sun.jersey.multipart.BodyPart;
import com.sun.jersey.multipart.FormDataBodyPart;
import com.sun.jersey.multipart.FormDataParam;
import genchev.hristian.automatictestevaluation.OutputModels.DisplayMaterial;
import genchev.hristian.automatictestevaluation.models.File;
import genchev.hristian.automatictestevaluation.services.FileUploadServiceImpl;
import org.apache.commons.io.IOUtils;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.StreamingOutput;
import java.io.*;
import java.util.List;

@Path("files")
public class FilesUploadRESTImpl implements FilesUploadREST {

    private FileUploadServiceImpl fileUploadService;

    @Inject
    public FilesUploadRESTImpl(FileUploadServiceImpl fileUploadService) {
        this.fileUploadService = fileUploadService;
    }

    @POST
    @Path("upload/{blank_id}")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Override
    public void uploadMultiple(@FormDataParam("files") FormDataBodyPart body, @PathParam("blank_id") Integer blank_id){
        for(BodyPart part : body.getParent().getBodyParts()){
            InputStream is = part.getEntityAs(InputStream.class);
            ContentDisposition meta = part.getContentDisposition();

            File file = null;
            try {
                byte[] bytes = IOUtils.toByteArray(is);
                file = new File();
                file.setFile(bytes);
                file.setFilename(meta.getFileName());
                file.setBlankId(blank_id);
            } catch (IOException e) {
                e.printStackTrace();
            }

            if (file != null) {
                System.out.println("In if");
                fileUploadService.uploadFile(file);
            }
        }
    }

    @GET
    @Path("materials/{blank_id}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<DisplayMaterial> getAllMaterials(@PathParam("blank_id") Integer blankId) {
        return fileUploadService.getAllMaterials(blankId);
    }

    @GET
    @Path("{material_id}")
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public Response getFile(@PathParam("material_id") Integer materialId) {
        File file = fileUploadService.getMaterial(materialId);
        StreamingOutput stream = new StreamingOutput() {
            @Override
            public void write(OutputStream os) throws IOException,
                    WebApplicationException {
                InputStream data = IOUtils.toInputStream(new String(file.getFile()));
                IOUtils.copy(data, os);
            }
        };

        return Response.ok(stream)
                .header("Content-Disposition",  "attachment; filename=" + file.getFilename())
                .header("Content-Type", "text/plain")
                .build();
    }

}
