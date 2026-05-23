package com.example.medicube.service;

import com.example.medicube.dto.PrescriptionRequestDto;
import com.example.medicube.dto.PrescriptionResponseDto;
import com.example.medicube.entity.Prescription;
import com.example.medicube.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public PrescriptionResponseDto uploadPrescription(PrescriptionRequestDto requestDto) {

        Prescription prescription = new Prescription();

        prescription.setPatientName(requestDto.getPatientName());
        prescription.setFileName(requestDto.getFileName());

        Prescription savedPrescription = prescriptionRepository.save(prescription);

        return mapToResponse(savedPrescription);
    }

    private PrescriptionResponseDto mapToResponse(Prescription prescription) {

        return new PrescriptionResponseDto(
                prescription.getId(),
                prescription.getPatientName(),
                prescription.getFileName()
        );
    }
}