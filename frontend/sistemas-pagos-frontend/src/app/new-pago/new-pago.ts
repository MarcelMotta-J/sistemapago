import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentType } from '../models/estudiantes.model';
import { Estudiantes as EstudiantesService } from '../services/estudiantes';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-pago',
  standalone: false,
  templateUrl: './new-pago.html',
  styleUrl: './new-pago.css',
})
export class NewPago implements OnInit {

  pagoFormGroup!: FormGroup;

  codigoEstudiante!: string;

  tiposPagos: string[] = [];

  pdfFileUrl!: string;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private estudiantesService: EstudiantesService) {

  }
  ngOnInit(): void {
    for (let elt in PaymentType) {
      let value = PaymentType[elt];

      if (typeof value == 'string') {
        this.tiposPagos.push(value);
      }
    }
    this.codigoEstudiante = this.activatedRoute.snapshot.params['codigoEstudiante'];

    this.pagoFormGroup = this.fb.group({
      date: this.fb.control(''),
      cantidad: this.fb.control(''),
      type: this.fb.control(''),
      codigoEstudiante: this.fb.control(this.codigoEstudiante),
      fileSource: this.fb.control(''),
      fileName: this.fb.control(''),

    })
  }

  // método p selecionar Arquivo
  selectFile(event: any) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.pagoFormGroup.patchValue({
        fileSource: file,
        fileName: file.name
      });
      this.pdfFileUrl = window.URL.createObjectURL(file);

      console.log(this.pdfFileUrl);
    }
  }

  guardarPago() {
    let date: Date = new Date(this.pagoFormGroup.value.date);

    // DD/MM/YYYY    
    let formattedDate = date.getDate()+"/"+(date.getMonth()+1)+'/'+date.getFullYear();

    let formData = new FormData();
    formData.set('date', formattedDate);
    formData.set('cantidad', this.pagoFormGroup.value.cantidad);
    formData.set('type', this.pagoFormGroup.value.type);
    formData.set('codigoEstudiante', this.pagoFormGroup.value.codigoEstudiante);
    formData.set('file', this.pagoFormGroup.value.fileSource);

    //console.log(formData);

    this.estudiantesService.guardarPago(formData).subscribe({
      next: value => {
        Swal.fire({
          title: "Pago Guardado",
          text: "El pago ha sido registrado con éxito",
          icon: "success"
        });
      },
      error: err => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ha ocurrido un error al registrar el Pago ",
        });
        
      }
    })
  }


  
}


