package com.example.medicube.controller;

import com.example.medicube.dto.PrescriptionRequestDto;
import com.example.medicube.dto.PrescriptionResponseDto;
import com.example.medicube.service.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/prescriptions")
@CrossOrigin("*")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping
    public PrescriptionResponseDto uploadPrescription(
            @RequestBody PrescriptionRequestDto requestDto) {

        return prescriptionService.uploadPrescription(requestDto);
    }
}