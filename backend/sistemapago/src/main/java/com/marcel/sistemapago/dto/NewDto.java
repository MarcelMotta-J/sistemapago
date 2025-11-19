package com.marcel.sistemapago.dto;

import java.time.LocalDate;

import com.marcel.sistemapago.enums.TypePago;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data  // para getters and setters
@AllArgsConstructor
@NoArgsConstructor
public class NewDto {

    private double cantidad;

    private TypePago typePago;

    private LocalDate date;

    private String codigoEstudiante;


    
}
