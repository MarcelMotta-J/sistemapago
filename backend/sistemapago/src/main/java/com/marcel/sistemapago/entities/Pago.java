package com.marcel.sistemapago.entities;

import java.time.LocalDate;

import jakarta.persistence.*;

import com.marcel.sistemapago.enums.PagoStatus;
import com.marcel.sistemapago.enums.TypePago;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data // para getters and setters
@NoArgsConstructor
@AllArgsConstructor
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fecha;

    private double cantidad;

    private TypePago type;

    private PagoStatus status;

    private String file;

    @ManyToOne// um etudante associado a muitos pagos
    private Estudiante estudiante;
    
} 