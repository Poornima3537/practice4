package com.example.medicube.service;

import com.example.medicube.dto.MedicineRequestDto;
import com.example.medicube.dto.MedicineResponseDto;
import com.example.medicube.entity.Medicine;
import com.example.medicube.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    public MedicineResponseDto addMedicine(MedicineRequestDto requestDto) {

        Medicine medicine = new Medicine();

        medicine.setName(requestDto.getName());
        medicine.setCategory(requestDto.getCategory());
        medicine.setPrice(requestDto.getPrice());
        medicine.setStock(requestDto.getStock());

        Medicine savedMedicine = medicineRepository.save(medicine);

        return mapToResponse(savedMedicine);
    }

    public List<MedicineResponseDto> getAllMedicines() {

        return medicineRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public MedicineResponseDto getMedicineById(Long id) {

        Medicine medicine = medicineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medicine Not Found"));

        return mapToResponse(medicine);
    }

    private MedicineResponseDto mapToResponse(Medicine medicine) {

        return new MedicineResponseDto(
                medicine.getId(),
                medicine.getName(),
                medicine.getCategory(),
                medicine.getPrice(),
                medicine.getStock()
        );
    }
}