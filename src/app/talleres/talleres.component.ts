import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-talleres',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ContactoComponent],
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  // Variable para controlar el estado del modal
  isModalOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribirse a los cambios de navegación para hacer scroll al principio
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  // Método para abrir el modal
  openModal() {
    this.isModalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }
}
