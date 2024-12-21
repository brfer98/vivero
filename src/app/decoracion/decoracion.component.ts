import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-decoracion',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './decoracion.component.html',
  styleUrls: ['./decoracion.component.css'],
  providers: [UsuarioService]

})
export class DecoracionComponent implements OnInit {

  figuras: any[] = [];  // Aquí almacenaremos las figuras

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Obtener datos de la API y asignar las figuras
    this.usuarioService.getTodasLasFiguras().subscribe(
      data => {
        if (data && data.figuras) {
          this.figuras = data.figuras;  // Guardamos las figuras filtradas desde la API
        }
      },
      error => {
        console.error('Error al obtener las figuras:', error);
      }
    );
  }
}
