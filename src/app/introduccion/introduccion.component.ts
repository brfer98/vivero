import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-introduccion',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css'],
  providers: [UsuarioService]
})
export class IntroduccionComponent implements OnInit {
  plantasTemporada: any[] = [];  // Propiedad para almacenar las plantas de temporada
  mostrarSanValentin: boolean = false; // Controla la visualización del mensaje
  figurasPopulares: any[] = [];  
  herramientasPopulares: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Obtener datos de la API y asignar las plantas de temporada populares
    this.usuarioService.getTemporada_seleccion().subscribe(
      data => {
        this.plantasTemporada = data.temporada;  // Guardamos las plantas filtradas desde la API
      },
      error => {
        console.error('Error al obtener las plantas de temporada:', error);
      }
    );

    // Obtener figuras populares
    this.usuarioService.getFigurasPopulares().subscribe(
      data => {
        this.figurasPopulares = data.figuras;  // Asegúrate de que data.figuras contiene las figuras populares
      },
      error => {
        console.error('Error al obtener las figuras populares:', error);
      }
    );


    this.usuarioService.getHerramientasPopulares().subscribe(
      data => {
        this.herramientasPopulares = data.herramientas;  // Asegúrate de que data.herramientas contiene las herramientas populares
      },
      error => {
        console.error('Error al obtener las herramientas populares:', error);
      }
    );
    

    // Lógica para mostrar el mensaje de San Valentín solo entre el 7 y el 15 de febrero
    const fechaActual = new Date();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();

    this.mostrarSanValentin = mes === 2 && dia >= 7 && dia <= 15;
  }
}
