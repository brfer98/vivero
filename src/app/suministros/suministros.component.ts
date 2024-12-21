import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-suministros',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './suministros.component.html',
  styleUrl: './suministros.component.css',
  providers: [UsuarioService]
})
export class SuministrosComponent implements OnInit{
  suministros: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  this.usuarioService.getSuministros().subscribe(
      data => {
        if (data && data.suministros) {
          this.suministros = data.suministros;  
        }
      },
      error => {
        console.error('Error al obtener las plantas de semillas:', error);
      }
    );
  }
}
