import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { UsuarioService } from '../services/usuario.service';  
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers: [UsuarioService]
})
export class AdminComponent {

  mostrarOpciones_tablas: boolean = false; 
  mostrarOpciones_Popularidad: boolean = false; 
  mostrarOpciones_Popularidad_Plantas: boolean = false; 
  mostrarOpciones_Popularidad_Figuras: boolean = false; 
  mostrarOpciones_Popularidad_Herramientas: boolean = false;





  mostrarFormulario_Estacion: boolean = false;
  selectedEstacion: string = ''; // Almacena el valor seleccionado
  message: string | null = null;

  constructor(private usuarioService: UsuarioService) {}

  toggleFormulario_Estacion() {
    this.mostrarFormulario_Estacion = !this.mostrarFormulario_Estacion;
  }

  // Método para manejar el cambio de estación
  onEstacionChange(event: Event) {
    const target = event.target as HTMLSelectElement; // Hacer cast a HTMLSelectElement
    this.selectedEstacion = target.value; // Acceder a value de forma segura
  }

  onSubmit(form: any) {
    this.usuarioService.cambiarEstacion(this.selectedEstacion).subscribe({
      next: (response) => {
        this.message = response.status; // Muestra mensaje de éxito      
        // Recargar la página después de 2 segundos
        setTimeout(() => {
            window.location.reload();
        }, 2000);
      },
      error: (error) => {
        this.message = 'Error al actualizar la estación'; // Muestra mensaje de error
        console.error(error);
      }
    });
  }

  toggleFormulario_tabla() {
    this.mostrarOpciones_tablas = !this.mostrarOpciones_tablas; 
  }


  //sirve para ocultar los cuadros de las opciones del admin//

  toggleFormulario_Popular() {
    this.mostrarOpciones_Popularidad = !this.mostrarOpciones_Popularidad; 
  }
        togglePopularidad_Plantas() {
          this.mostrarOpciones_Popularidad_Plantas = !this.mostrarOpciones_Popularidad_Plantas; 
          this.mostrarOpciones_Popularidad = !this.mostrarOpciones_Popularidad; 

        }
        togglePopularidad_Figuras() {
          this.mostrarOpciones_Popularidad_Figuras = !this.mostrarOpciones_Popularidad_Figuras; 
          this.mostrarOpciones_Popularidad = !this.mostrarOpciones_Popularidad; 

        }
        togglePopularidad_Herramientas() {
          this.mostrarOpciones_Popularidad_Herramientas = !this.mostrarOpciones_Popularidad_Herramientas; 
          this.mostrarOpciones_Popularidad = !this.mostrarOpciones_Popularidad; 

        }


        plantasTemporada: any[] = [];  // Usamos 'any' para las plantas de temporada
        figuras: any[] = [];  // Aquí almacenaremos las figuras

        ngOnInit(): void {
          // Obtener datos de la API y asignar las plantas de temporada
          this.usuarioService.getTemporada().subscribe(
            (data: any) => {
              // Aseguramos que 'popular' esté definido y por defecto en false
              this.plantasTemporada = data.temporada.map((planta: any) => ({
                ...planta,
                popular: planta.popular === true // Solo se establece en true si estaba explícitamente en true
              }));
            },
            error => {
              console.error('Error al obtener las plantas de temporada:', error);
            }
          );


                          // Obtener datos de la API y asignar las figuras
                          this.usuarioService.getTodasLasFiguras().subscribe(
                            (data: any) => {
                              // Aseguramos que 'popular' esté definido y por defecto en false
                              this.figuras = data.figuras.map((figura: any) => ({
                                ...figura,
                                popular: figura.popular === true // Solo se establece en true si estaba explícitamente en true
                              }));
                            },
                            error => {
                              console.error('Error al obtener las figuras:', error);
                            }
                          );

                                        // Obtener datos de la API y asignar las herramientas
                                          this.usuarioService.getHerramientas().subscribe(
                                            (data: any) => {
                                                // Aseguramos que 'popular' esté definido y por defecto en false
                                                this.herramientas = data.herramientas.map((herramienta: any) => ({
                                                    ...herramienta,
                                                    popular: herramienta.popular === true // Solo se establece en true si estaba explícitamente en true
                                                }));
                                            },
                                            error => {
                                                console.error('Error al obtener las herramientas:', error);
                                            }
                                        );
        }
      










        onSubmit2() {
          // Crear un objeto que contiene solo las plantas y su popularidad
          const plantasParaActualizar = this.plantasTemporada.map(planta => ({
              descripcion: planta.descripcion,
              popular: planta.popular ? 'sí' : 'no' // Convertimos a 'sí' o 'no' según el estado del checkbox
          }));
      
          // Llamamos al servicio para actualizar las plantas
          this.usuarioService.actualizarPopularidadPlantas(plantasParaActualizar).subscribe({
              next: response => {
                  this.message = response.status; // Muestra mensaje de éxito
      
                  // Recargar la página después de 2 segundos
                  setTimeout(() => {
                      window.location.reload();
                  }, 2000);
              },
              error: error => {
                  this.message = 'Error al actualizar la popularidad de las plantas'; // Muestra mensaje de error
                  console.error(error);
              }
          });
      }
      
      
        // Método para manejar el cambio de estado popular
        onPopularChange(planta: any) {
          planta.popular = !planta.popular; // Cambiamos el estado de popularidad
        }










        onSubmit3() {
          // Crear un objeto que contiene solo las figuras y su popularidad
          const figurasParaActualizar = this.figuras.map(figura => ({
            descripcion: figura.descripcion,
            popular: figura.popular ? 'sí' : 'no' // Convertimos a 'sí' o 'no' según el estado del checkbox
          }));
      
          // Llamamos al servicio para actualizar las figuras
          this.usuarioService.actualizarPopularidadFiguras(figurasParaActualizar).subscribe({
            next: response => {
              this.message = response.status; // Muestra mensaje de éxito
      
              // Recargar la página después de 2 segundos
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            },
            error: error => {
              this.message = 'Error al actualizar la popularidad de las figuras'; // Muestra mensaje de error
              console.error(error);
            }
          });
        }
      











        herramientas: any[] = []; // Aquí almacenaremos las herramientas
        onSubmitHerramientas() {
          // Crear un objeto que contiene solo las herramientas y su popularidad
          const herramientasParaActualizar = this.herramientas.map(herramienta => ({
              descripcion: herramienta.descripcion,
              popular: herramienta.popular ? 'sí' : 'no' // Convertimos a 'sí' o 'no' según el estado del checkbox
          }));
      
          // Llamamos al servicio para actualizar las herramientas
          this.usuarioService.actualizarPopularidadHerramientas(herramientasParaActualizar).subscribe({
              next: response => {
                  this.message = response.status; // Muestra mensaje de éxito
      
                  // Recargar la página después de 2 segundos
                  setTimeout(() => {
                      window.location.reload();
                  }, 2000);
              },
              error: error => {
                  this.message = 'Error al actualizar la popularidad de las herramientas'; // Muestra mensaje de error
                  console.error(error);
              }
          });
      }





      tablaSeleccionada: string = ''; // Para almacenar la tabla seleccionada
      items: any[] = []; // Aquí almacenaremos los datos de la tabla seleccionada
    
      onSubmititem() {
        if (this.tablaSeleccionada) {
          // Llamamos al servicio con el nombre de la tabla seleccionada
          this.usuarioService.getDatosPorTabla(this.tablaSeleccionada).subscribe(
            (data: any) => {
              // Imprime la respuesta para diagnóstico
              console.log('Respuesta de la API para la tabla seleccionada:', data);
      
              let registros;
      
              // Verifica si la tabla seleccionada es 'todas_las_figuras'
              if (this.tablaSeleccionada === 'todas_las_figuras') {
                registros = data['figuras']; // Accede a la propiedad 'figuras' para todas las figuras
              } else if (this.tablaSeleccionada === 'figuras') {
                registros = data['figuras']; // Accede a la propiedad 'figuras' para las populares
              } else {
                registros = data[this.tablaSeleccionada]; // Accede normalmente para otras tablas
              }
      
              if (Array.isArray(registros)) {
                console.log(`La respuesta contiene datos para "${this.tablaSeleccionada}":`, registros);
                this.items = registros.map((registro: any) => ({
                  ...registro,
                  popular: registro.popular === true || registro.popular === 'sí' // Maneja las figuras populares
                }));
              } else {
                console.warn(`La estructura de la respuesta no es válida o no contiene datos para "${this.tablaSeleccionada}". Respuesta:`, data);
                this.items = []; // Asegúrate de que 'items' esté vacío si no hay datos
              }
            },
            error => {
              console.error('Error al obtener los datos de la tabla seleccionada:', error);
              this.items = []; // Limpiar los items si hay error
            }
          );
        } else {
          console.error('Por favor, seleccione una tabla válida.');
        }
      }
      
      
}
