import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-arboles-florales',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './arboles-florales.component.html',
  styleUrl: './arboles-florales.component.css',
  providers: [UsuarioService]
})
export class ArbolesFloralesComponent implements OnInit{

 arbolesFlorales: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos de árboles florales
    this.usuarioService.getArbolesFlorales().subscribe(
      data => {
        if (data && data.arbolesFlorales) {
          this.arbolesFlorales = data.arbolesFlorales;  // Guardamos los datos de árboles florales
        }
      },
      error => {
        console.error('Error al obtener los árboles florales:', error);
      }
    );
  }
}
