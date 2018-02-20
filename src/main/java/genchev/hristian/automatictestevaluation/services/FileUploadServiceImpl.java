package genchev.hristian.automatictestevaluation.services;

import com.google.inject.Inject;
import genchev.hristian.automatictestevaluation.models.File;
import genchev.hristian.automatictestevaluation.repository.FileUploadRepository;

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
}
