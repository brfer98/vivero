import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-plantas-secano',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './plantas-secano.component.html',
  styleUrls: ['./plantas-secano.component.css'],
  providers: [UsuarioService]
})
export class PlantasSecanoComponent implements OnInit {

  plantas_secano: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getPlantasSecano().subscribe(
      data => {
        // Asignar los datos de plantasSecano al array plantas_secano
        if (data && data.plantasSecano) {
          this.plantas_secano = data.plantasSecano;  
        }
      },
      error => {
        console.error('Error al obtener las plantas de secano:', error);
      }
    );
  }

}
