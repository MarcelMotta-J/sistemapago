
import { Pago } from '../models/estudiantes.model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiantes as EstudiantesService } from '../services/estudiantes';

import { Component, ChangeDetectorRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-estudiante-details',
  standalone: false,
  templateUrl: './estudiante-details.html',
  styleUrl: './estudiante-details.css',

})
export class EstudianteDetails implements OnInit {

  isString(value: string | undefined): value is string {
    return typeof value === 'string';
  }


  estudianteCodigo!: string;



  //pagosEstudiante!: Array<Pago>;
  public pagosEstudiante: any;

  //pagosDataSource!: MatTableDataSource<Pago>;
  public pagosDataSource: any;

  public displayedColumns = ['id', 'fecha', 'cantidad', 'type', 'status', 'nombre'];


  constructor(private activateRoute: ActivatedRoute,
    private estudiantesService: EstudiantesService,
    private cdr: ChangeDetectorRef,
    private router: Router) {

  }


  ngOnInit(): void {

    this.estudianteCodigo = this.activateRoute.snapshot.params['codigo'];

    this.estudiantesService.getPagosDeEstudiantes(this.estudianteCodigo).subscribe({
      next: value => {
        this.pagosEstudiante = value;

        this.pagosDataSource = new MatTableDataSource<Pago>(this.pagosEstudiante);

        this.cdr.detectChanges();
      },

      error: err => {
        console.log(err);
      }

    })



  }

  agregarPago() {
    this.router.navigateByUrl(`/admin/new-pago/${this.estudianteCodigo}`);
  }

  // 4:13:23

}

