package com.marcel.sistemapago;

import com.marcel.sistemapago.entities.Estudiante;
import com.marcel.sistemapago.entities.Pago;
import com.marcel.sistemapago.enums.PagoStatus;
import com.marcel.sistemapago.enums.TypePago;
import com.marcel.sistemapago.repository.EstudianteRepository;
import com.marcel.sistemapago.repository.PagoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class SistemapagoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SistemapagoApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(EstudianteRepository estudianteRepository, PagoRepository pagoRepository){
		return args -> {
			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Christian")
					.apellido("Ramirez")
					.codigo("1234")
					.programaId("LTA1")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Biaggio")
					.apellido("Pires")
					.codigo("12354")
					.programaId("LTA1")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Julen")
					.apellido("Silveira")
					.codigo("1256634")
					.programaId("LTA1")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Raul")
					.apellido("Santos")
					.codigo("12349030")
					.programaId("LTA2")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Marcel")
					.apellido("Motta")
					.codigo("12349055")
					.programaId("LTA2")
					.build());

			estudianteRepository.save(Estudiante.builder()
					.id(UUID.randomUUID().toString())
					.nombre("Katia")
					.apellido("Flavia")
					.codigo("12349156")
					.programaId("LTA2")
					.build());


			// Atribuir pago aos estudantes

			TypePago tiposPago[] = TypePago.values();
			Random random = new Random();

			estudianteRepository.findAll().forEach(estudiante ->{
				for (int i = 0; i < 10; i++){
					int index = random.nextInt(tiposPago.length);

					Pago pago = Pago.builder()
							.cantidad(1000 + (int) (Math.random() * 20000))
							.type(tiposPago[index])
							.status(PagoStatus.CREADO)
							.fecha(LocalDate.now())
							.estudiante(estudiante)
							.build();

					pagoRepository.save(pago);
				}
			});

		};
	}
}
