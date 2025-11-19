package com.marcel.sistemapago.service;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.marcel.sistemapago.entities.Estudiante;
import com.marcel.sistemapago.entities.Pago;
import com.marcel.sistemapago.enums.PagoStatus;
import com.marcel.sistemapago.enums.TypePago;
import com.marcel.sistemapago.repository.EstudianteRepository;
import com.marcel.sistemapago.repository.PagoRepository;

@Service
@Transactional
public class PagoService {

    @Autowired
    private PagoRepository pagoRepository;

    @Autowired
    private EstudianteRepository estudianteRepository;

    public Pago savePago(MultipartFile file, double cantidad, TypePago type, LocalDate date, String codigoEstudiante)
            throws IOException {

        /*
         * criando rota onde se guardará os arquivos
         * System.getProperty("user.home") - obtem a rota do diretorio do usuário do
         * sistema operacional
         * Paths.get(..) - cria um objeto Path apontando a uma pasta chamada enset/pagos
         * dentro do diretório usuario
         */
        Path folderPath = Paths.get(System.getProperty("user.home"), "enset-data", "pagos");

        if (!Files.exists(folderPath)) {
            Files.createDirectories(folderPath);
        }

        String fileName = UUID.randomUUID().toString();

        // cria pasta para o arquivo PDF que se guardará em enset/data
        Path filePath = Paths.get(System.getProperty("user.home"), "enset-data", "pagos", fileName + ".pdf");

        // file.getInputStream() - obtem o fluxo de dados do arquivo recebido desde a
        // solicitação http
        // Files.copy(...) - copia os dados do arquivo ao destino filePath
        Files.copy(file.getInputStream(), filePath);

        Estudiante estudiante = estudianteRepository.findByCodigo(codigoEstudiante);

        Pago pago = Pago.builder()
                .type(type)
                .status(PagoStatus.CREADO)
                .fecha(date)
                .estudiante(estudiante)
                .cantidad(cantidad)
                .file(filePath.toUri().toString())
                .build();

        return pagoRepository.save(pago);
    }

    //34mim51
    public byte[] getArchivoPorId(Long pagoId) throws IOException{
        Pago pago = pagoRepository.findById(pagoId).get();

        /* 
         * pago.getFile() - obtem a URI do arquivo guardado, 
         * URI.create(...) - converte uma cadeia em objeto URI 
         * Path.of(...) - Converte o URI emum Path
         * Files.readAllBytes(...) - lê o conteúdo do arquivo e o devolve
         * como um array de bytes.
         */

        return Files.readAllBytes(Path.of(URI.create(pago.getFile())));
    }


    public Pago actualizarPagoPorStatus(PagoStatus status, Long id){
        Pago pago = pagoRepository.findById(id).get();
        pago.setStatus(status);

        return pagoRepository.save(pago);
    }

}
