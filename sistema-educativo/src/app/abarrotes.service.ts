import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abarrotes } from './abarrotes';

@Injectable({
  providedIn: 'root'
})
export class AbarrotesService {

  private URLbase = 'http://localhost:8080/apiRest'

  constructor(private httpClient:HttpClient) {
   }

   obtenerAbarrotes():Observable<Abarrotes[]>{
    return this.httpClient.get<Abarrotes[]>(`${this.URLbase+'/abarrotes'}`);
   }

   registrarAbarrotes(aba:Abarrotes):Observable<Object>{
    return this.httpClient.post(`${this.URLbase+'/abarrotes/insertar'}`,aba)
   }
   actualizarAbarrotes(id:number,aba:Abarrotes):Observable<Object>{
    return this.httpClient.put(`${this.URLbase+'/abarrotes/modificar'}/${id}`,aba)
   }
   obtenerAbarrotesUnico(id:number):Observable<Abarrotes>{
    return this.httpClient.get<Abarrotes>(`${this.URLbase+`/abarrotes/Obtener`}/${id}`);
   }
   eliminarAbarrotes (id:number):Observable<Object>{
    return this.httpClient.delete(`${this.URLbase+`/abarrotes/eliminar`}/${id}`);
   }
}
