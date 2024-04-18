import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }

  public getAllProducts():Observable<any[]>{
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }
  public getCategories():Observable<any[]>{
    return this.http.get<any[]>('https://api.escuelajs.co/api/v1/categories');
  }

  public getAllUsers():Observable<any[]>{
    return this.http.get<any[]>(' https://api.escuelajs.co/api/v1/users');
  }
  public getAllComments():Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments');
  }


}
