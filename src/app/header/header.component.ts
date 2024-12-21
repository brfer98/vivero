import { Component, HostListener, OnInit  } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactoComponent } from '../contacto/contacto.component';
import { IntroduccionComponent } from '../introduccion/introduccion.component';
import { TalleresComponent } from '../talleres/talleres.component';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';
import { SuministrosComponent } from '../suministros/suministros.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ContactoComponent, IntroduccionComponent, TalleresComponent,SuministrosComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerClass = 'original-header encabezado custom-navbar-expand-lg custom-navbar-dark custom-bg-dark';
  logoClass = 'original-logo'; // Define la clase del logo
  private scrollEvent$ = new Subject<void>();
  private lastScrollTop = 0; // Última posición de desplazamiento

  constructor(private router: Router) {
    this.scrollEvent$.pipe(debounceTime(50)).subscribe(() => {
      this.onScroll();
    });
  }

  ngOnInit() {
    // Suscribirse a los cambios de navegación para hacer scroll al principio
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollEvent$.next();
  }

  private onScroll() {
    const offset = window.pageYOffset;
    const scrollDelta = Math.abs(this.lastScrollTop - offset);

    // Ajusta el umbral de 250 a un valor más alto si es necesario
    if (offset > 5 && scrollDelta > 5) {
      this.headerClass = 'fixed-header encabezado custom-navbar-expand-lg custom-navbar-dark custom-bg-dark';
      this.logoClass = 'small-logo';
    } else if (offset <= 100) {
      this.headerClass = 'original-header encabezado custom-navbar-expand-lg custom-navbar-dark custom-bg-dark';
      this.logoClass = 'original-logo';
    }

    this.lastScrollTop = offset;
  }
}
