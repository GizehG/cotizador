import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }
  
  url='http://localhost:8080/API/cliente'

  nuevoCliente(cliente: Cliente):Observable<any>{
    return this.http.post(this.url, cliente);
  }

  getTarifa(id: string):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }

  getDescuento(id: string):Observable<any>{
    return this.http.get(this.url + "/" + id);
  }
}
