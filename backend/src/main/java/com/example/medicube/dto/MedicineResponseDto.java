package com.example.medicube.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicineResponseDto {

    private Long id;

    private String name;

    private String category;

    private Double price;

    private Integer stock;
}