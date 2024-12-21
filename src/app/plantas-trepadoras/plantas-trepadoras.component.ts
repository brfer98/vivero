import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-plantas-trepadoras',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './plantas-trepadoras.component.html',
  styleUrls: ['./plantas-trepadoras.component.css'],
  providers: [UsuarioService]
})
export class PlantasTrepadorasComponent implements OnInit {
  plantas_trepadoras: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos de plantas trepadoras
    this.usuarioService.getPlantasTrepadoras().subscribe(
      data => {
        if (data && data.plantasTrepadoras) {
          this.plantas_trepadoras = data.plantasTrepadoras;  // Guardamos los datos de plantas trepadoras
        }
      },
      error => {
        console.error('Error al obtener las plantas trepadoras:', error);
      }
    );
  }
}
