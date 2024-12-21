import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css',
  providers: [UsuarioService]
})
export class HerramientasComponent implements OnInit{

  herramientas: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  this.usuarioService.getHerramientas().subscribe(
      data => {
        if (data && data.herramientas) {
          this.herramientas = data.herramientas;  
        }
      },
      error => {
        console.error('Error al obtener las plantas de semillas:', error);
      }
    );
  }
}
