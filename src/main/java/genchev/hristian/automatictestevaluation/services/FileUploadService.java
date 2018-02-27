package genchev.hristian.automatictestevaluation.services;

import genchev.hristian.automatictestevaluation.OutputModels.DisplayMaterial;
import genchev.hristian.automatictestevaluation.models.File;

import java.util.List;

public interface FileUploadService {
    void uploadFile(File file);

    List<DisplayMaterial> getAllMaterials(Integer blankId);
}
