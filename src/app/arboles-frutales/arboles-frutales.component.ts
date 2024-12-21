import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-arboles-frutales',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './arboles-frutales.component.html',
  styleUrl: './arboles-frutales.component.css',
  providers: [UsuarioService]
})
export class ArbolesFrutalesComponent implements OnInit{
  arbolesFrutales: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos de árboles florales
    this.usuarioService.getArbolesFrutales().subscribe(
      data => {
        if (data && data.arbolesFrutales) {
          this.arbolesFrutales = data.arbolesFrutales;  // Guardamos los datos de árboles florales
        }
      },
      error => {
        console.error('Error al obtener los árboles florales:', error);
      }
    );
  }
}

