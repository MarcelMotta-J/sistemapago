import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantes } from '../services/estudiantes';

@Component({
  selector: 'app-pagos',
  standalone: false,
  templateUrl: './pagos.html',
  styleUrl: './pagos.css',
})
export class Pagos implements OnInit {

  public pagos: any;
  public dataSource: any;
  public displayedCollumns = ['id', 'fecha', 'cantidad',
    'type', 'status', 'nombre'];

  /*
    - @ViewChild(...) é um decorador que permite acessar um componente filho do DOM
    - @ViewChild(...) permite fazer componentes secundários(MatPaginator ou MatSort)
    - paginator! com ! indica que está pronto para usar e não estará vazia
  */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //3h21min03seg

  // httpClient permite consumir uma api rest ou serviço rest
  constructor(private http: HttpClient, private estudianteService: Estudiantes) { }

  ngOnInit(): void {
    // this.http.get("http://localhost:8080/pagos").subscribe({
    this.estudianteService.getAllPagos().subscribe({
      next: data => {
        this.pagos = data;
        // abaixo, fonte de dados para a tabela
        this.dataSource = new MatTableDataSource(this.pagos);

        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;
      },

      error: err => {
        console.log(err);
      }
    });

  }



}
