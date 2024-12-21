import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-plantas-semillas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './plantas-semillas.component.html',
  styleUrl: './plantas-semillas.component.css',
  providers: [UsuarioService]

})
export class PlantasSemillasComponent implements OnInit{
  
  plantas_semillas: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  this.usuarioService.getPlantasSemillas().subscribe(
      data => {
        if (data && data.plantasSemillas) {
          this.plantas_semillas = data.plantasSemillas;  
        }
      },
      error => {
        console.error('Error al obtener las plantas de semillas:', error);
      }
    );
  }
}
