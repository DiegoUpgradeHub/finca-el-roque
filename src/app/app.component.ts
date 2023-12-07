import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    // Obtener todos los enlaces que apuntan a las secciones
    const enlacesSecciones = document.querySelectorAll('nav a');

    // Agregar un listener de eventos a cada enlace
    enlacesSecciones.forEach(enlace => {
      enlace.addEventListener('click', (event) => {
        event.preventDefault();

        // Obtener el atributo href del enlace
        const href = enlace.getAttribute('href');

        // Verificar si href no es null o undefined antes de continuar
        if (href !== null && href !== undefined) {
          const targetId = href.substring(1);

          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  phoneMenu: boolean = false;
  showPhoneMenu(): void {
    this.phoneMenu = !this.phoneMenu;
  }

}
