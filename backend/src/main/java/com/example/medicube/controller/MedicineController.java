package com.example.medicube.controller;

import com.example.medicube.dto.MedicineRequestDto;
import com.example.medicube.dto.MedicineResponseDto;
import com.example.medicube.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin("*")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @PostMapping
    public MedicineResponseDto addMedicine(@RequestBody MedicineRequestDto requestDto) {
        return medicineService.addMedicine(requestDto);
    }

    @GetMapping
    public List<MedicineResponseDto> getAllMedicines() {
        return medicineService.getAllMedicines();
    }

    @GetMapping("/{id}")
    public MedicineResponseDto getMedicineById(@PathVariable Long id) {
        return medicineService.getMedicineById(id);
    }
}