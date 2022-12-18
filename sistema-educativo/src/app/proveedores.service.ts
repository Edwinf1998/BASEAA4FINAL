import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedores } from './proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private URLbase = 'http://localhost:8080/apiRest'

  constructor(private httpClient:HttpClient) {
   }

   obtenerProveedores():Observable<Proveedores[]>{
    return this.httpClient.get<Proveedores[]>(`${this.URLbase+'/proveedores'}`);
   }

   registrarProveedores(pro:Proveedores):Observable<Object>{
    return this.httpClient.post(`${this.URLbase+'/proveedores/insertar'}`,pro)
   }
   actualizarProveedores(id:number,pro:Proveedores):Observable<Object>{
    return this.httpClient.put(`${this.URLbase+'/proveedores/modificar'}/${id}`,pro)
   }
   obtenerProveedoresUnico(id:number):Observable<Proveedores>{
    return this.httpClient.get<Proveedores>(`${this.URLbase+`/proveedores/Obtener`}/${id}`);
   }
   eliminarProveedores (id:number):Observable<Object>{
    return this.httpClient.delete(`${this.URLbase+`/proveedores/eliminar`}/${id}`);
   }
}
