
// precisei usar um alias para não conflitar com o model que tem estudiants.ts também
import { Estudiantes as UserService } from '../services/estudiantes';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from '../models/estudiantes.model';
import { Router } from '@angular/router';

import { Component, ChangeDetectorRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-estudiantes',
  standalone: false,
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css',
  
})
export class Estudiantes implements OnInit {  
 
  
 
  public estudiantes: any;

  public estudiantesDataSource: any;
  

  public displayedColumns =  ['id', 'nombre', 'apellido', 
    'codigo', 'programaId', 'pagos'];

  


  constructor(private estudianteService: UserService, private router: Router, private cdr: ChangeDetectorRef){

  }
  

  ngOnInit(): void {
    this.estudianteService.getAllEstudiantes().subscribe({
      next: value =>{
        this.estudiantes = value;

        this.estudiantesDataSource = new MatTableDataSource<Estudiante>(this.estudiantes);  

        this.cdr.detectChanges();
        
      },
      error: err =>{
        console.log(err);
      }
    });
  }

 

  listarPagosDeEstudiante(estudiante: Estudiante){
    this.router.navigateByUrl(`/admin/estudiante-details/${estudiante.codigo}`);
  }
  

}
