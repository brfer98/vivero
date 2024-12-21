import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-coniferas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './coniferas.component.html',
  styleUrls: ['./coniferas.component.css'],
  providers: [UsuarioService]
})

export class ConiferasComponent implements OnInit {
  coniferas: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos de coníferas
    this.usuarioService.getConiferas().subscribe(
      data => {
        if (data && data.coniferas) {
          this.coniferas = data.coniferas;  // Guardamos los datos de coníferas
        }
      },
      error => {
        console.error('Error al obtener las coníferas:', error);
      }
    );
  }
}
