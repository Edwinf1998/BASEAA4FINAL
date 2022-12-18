import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendedores } from './vendedores';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  private URLbase = 'http://localhost:8080/apiRest'

  constructor(private httpClient:HttpClient) {
   }

   obtenerVendedores():Observable<Vendedores[]>{
    return this.httpClient.get<Vendedores[]>(`${this.URLbase+'/vendedores'}`);
   }

   registrarVendedores(ven:Vendedores):Observable<Object>{
    return this.httpClient.post(`${this.URLbase+'/vendedores/insertar'}`,ven)
   }
   actualizarVendedores(id:number,ven:Vendedores):Observable<Object>{
    return this.httpClient.put(`${this.URLbase+'/vendedores/modificar'}/${id}`,ven)
   }
   obtenerVendedoresUnico(id:number):Observable<Vendedores>{
    return this.httpClient.get<Vendedores>(`${this.URLbase+`/vendedores/Obtener`}/${id}`);
   }
   eliminarVendedores(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.URLbase+`/vendedores/eliminar`}/${id}`);
   }
}
