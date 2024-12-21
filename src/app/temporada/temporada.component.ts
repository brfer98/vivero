import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-temporada',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './temporada.component.html',
  styleUrl: './temporada.component.css',
  providers: [UsuarioService]
})
export class TemporadaComponent {

  plantasTemporada: any[] = [];  // Propiedad para almacenar las plantas de temporada

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Obtener datos de la API y asignar las plantas de temporada populares
    this.usuarioService.getTemporada().subscribe(
      data => {
        this.plantasTemporada = data.temporada;  // Guardamos las plantas filtradas desde la API
      },
      error => {
        console.error('Error al obtener las plantas de temporada:', error);
      }
    );
  }

}
