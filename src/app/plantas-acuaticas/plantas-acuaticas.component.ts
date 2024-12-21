import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';  

@Component({
  selector: 'app-plantas-acuaticas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './plantas-acuaticas.component.html',
  styleUrls: ['./plantas-acuaticas.component.css'],
  providers: [UsuarioService]
})
export class PlantasAcuaticasComponent implements OnInit {
  plantas_acuaticas: any[] = [];  

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los datos de plantas acuáticas
    this.usuarioService.getPlantasAcuaticas().subscribe(
      data => {
        if (data && data.plantasAcuaticas) {
          this.plantas_acuaticas = data.plantasAcuaticas;  // Guardamos los datos de plantas acuáticas
        }
      },
      error => {
        console.error('Error al obtener las plantas acuáticas:', error);
      }
    );
  }

  toggleFlip(event: Event): void {
    const card = (event.currentTarget as HTMLElement).closest('.planta-acuatica-card');
    if (card) {
      card.classList.toggle('flipped');
    }
  }
}
