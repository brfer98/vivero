import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-palmaceas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './palmaceas.component.html',
  styleUrl: './palmaceas.component.css',
  providers: [UsuarioService]
})

export class PalmaceasComponent implements OnInit {
  palmaceas: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos de coníferas
    this.usuarioService.getPalmaceas().subscribe(
      data => {
        if (data && data.palmaceas) {
          this.palmaceas = data.palmaceas;  // Guardamos los datos de coníferas
        }
      },
      error => {
        console.error('Error al obtener las coníferas:', error);
      }
    );
  }
}