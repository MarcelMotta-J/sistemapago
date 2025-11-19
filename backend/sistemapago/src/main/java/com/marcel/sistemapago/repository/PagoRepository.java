package com.marcel.sistemapago.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marcel.sistemapago.entities.Pago;
import com.marcel.sistemapago.enums.PagoStatus;
import com.marcel.sistemapago.enums.TypePago;



@Repository
public interface PagoRepository extends JpaRepository<Pago, Long>{
    
    List<Pago> findByEstudianteCodigo(String codigo);

    List<Pago> findByStatus(PagoStatus status);

    List<Pago> findByType(TypePago type);

    // 21min 46

}
