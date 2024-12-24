import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private apiUrl = 'http://localhost/prueba/api.php'; 
  private apiUrl = 'http://localhost/vivero/prueba/api.php'; 


  constructor(private http: HttpClient) {}

  getTodasLasFiguras(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=todas_las_figuras`);
  }

  // Obtener solo figuras populares
  getFigurasPopulares(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=figuras`);
  }

  // Obtener herramientas
  getHerramientas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=herramientas`);
  }

  // Obtener herramientas populares
  getHerramientasPopulares(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=herramientas_populares`);
  }

  getSuministros(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=suministros`);
  }

  // Obtener datos de temporada
  getTemporada(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=temporada`);
  }

  // Obtener datos de coniferas
  getConiferas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=coniferas`);
  }
  
  // Obtener datos de palmaceas
  getPalmaceas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=palmaceas`);
  }
  
  // Obtener datos de arboles frutales
  getArbolesFrutales(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=arboles_frutales`);
  }

  // Obtener datos de arboles florales
  getArbolesFlorales(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=arboles_florales`);
  }


  // Obtener datos de temporada
  getTemporada_seleccion(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=temporada_seleccion`);
  }

    // Obtener datos de 
  getPlantasSecano(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=plantas_secano`);
  }

  // Obtener datos de 
  getPlantasTrepadoras(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=plantas_trepadoras`);
  }

  // Obtener datos de 
  getPlantasAcuaticas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=plantas_acuaticas`);
  }

  // Obtener datos de plantas_semillas
  getPlantasSemillas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?tabla=plantas_semillas`);
  }





// Obtener datos de cualquier tabla
getDatosPorTabla(tabla: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}?tabla=${tabla}`);
}




  



  cambiarEstacion(estacion: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?accion=cambiar_estacion`, { estacion });
  }
  // En UsuarioService
  actualizarPopularidadPlantas(plantas: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?accion=actualizar_popularidad`, { plantas });
  }
  // Método para actualizar la popularidad de las figuras
  actualizarPopularidadFiguras(figuras: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?accion=actualizar_popularidad_figuras`, { figuras });
  }

  actualizarPopularidadHerramientas(herramientas: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?accion=actualizar_popularidad_herramientas`, { herramientas });
  }


}
