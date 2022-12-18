/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private URLbase = 'http://localhost:8080/apirest'

  constructor(private httpClient:HttpClient) {
   }

   obtenerEstudiante():Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(`${this.URLbase+'/estudiante'}`);
   }

   registrarEstudiante(estu:Estudiante):Observable<Object>{
    return this.httpClient.post(`${this.URLbase+'/estudiante/insertar'}`,estu)
   }
   actualizarEstudiante(id:number,estu:Estudiante):Observable<Object>{
    return this.httpClient.put(`${this.URLbase+'/estudiante/modificar'}/${id}`,estu)
   }
   obtenerEstudianteUnico(id:number):Observable<Estudiante>{
    return this.httpClient.get<Estudiante>(`${this.URLbase+`/estudiante/Obtener`}/${id}`);
   }
   eliminarEstudiante (id:number):Observable<Object>{
    return this.httpClient.delete(`${this.URLbase+`/estudiante/eliminar`}/${id}`);
   }
}
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from './usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URLbase = 'http://localhost:8080/apiRest'

  constructor(private httpClient:HttpClient) {
   }

   obtenerUsuarios():Observable<Usuarios[]>{
    return this.httpClient.get<Usuarios[]>(`${this.URLbase+'/usuarios'}`);
   }

   registrarUsuarios(usu:Usuarios):Observable<Object>{
    return this.httpClient.post(`${this.URLbase+'/usuarios/insertar'}`,usu)
   }
   actualizarUsuarios(id:number,usu:Usuarios):Observable<Object>{
    return this.httpClient.put(`${this.URLbase+'/usuarios/modificar'}/${id}`,usu)
   }
   obtenerUsuariosUnico(id:number):Observable<Usuarios>{
    return this.httpClient.get<Usuarios>(`${this.URLbase+`/usuarios/Obtener`}/${id}`);
   }
   eliminarUsuarios (id:number):Observable<Object>{
    return this.httpClient.delete(`${this.URLbase+`/usuarios/eliminar`}/${id}`);
   }


}
