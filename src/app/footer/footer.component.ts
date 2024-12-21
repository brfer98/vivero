import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  fechaActual: string;

  constructor() {
    this.fechaActual = this.dameLaFechaHora();
  }

  dameLaFechaHora(): string {
    const hoy = new Date();
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const dia = hoy.getDate();
    const mes = meses[hoy.getMonth()];
    const anio = hoy.getFullYear();
    
    return `${dia} de ${mes} de ${anio}`;
  }
  
}
