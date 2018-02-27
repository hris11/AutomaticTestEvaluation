package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.OutputModels.DisplayMaterial;
import genchev.hristian.automatictestevaluation.models.File;
import genchev.hristian.automatictestevaluation.repository.FileUploadRepository;

import java.util.ArrayList;
import java.util.List;

public class FileUploadServiceImpl implements FileUploadService {

    private FileUploadRepository fileUploadRepository;

    @Inject
    public FileUploadServiceImpl(FileUploadRepository fileUploadRepository) {
        this.fileUploadRepository = fileUploadRepository;
    }

    @Override
    public void uploadFile(File file) {
        fileUploadRepository.insert(file);
    }

    @Override
    public List<DisplayMaterial> getAllMaterials(Integer blankId) {
        List<DisplayMaterial> materials = new ArrayList<>();
        List<File> files =  fileUploadRepository.getAllMaterials(blankId);
        for (File file : files) {
            materials.add(new DisplayMaterial(file.getFilename(), file.getId()));
        }

        return materials;
    }
}
