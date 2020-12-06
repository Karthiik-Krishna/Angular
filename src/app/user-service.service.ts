import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { Products } from './products'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public url = `http://localhost:3000/users`
  public url2 = `http://localhost:3000/products`

  constructor(private http: HttpClient) { }

  public loggedIn = false

  changeStatus(){
    this.loggedIn = true
  }

  getDetails(){
    return this.http.get<any>(this.url)
  }
  postDetails(user:User):Observable<User>{
    return this.http.post<User>(this.url, user)
  }

  getProducts():Observable<Products>{
    return this.http.get<Products>(this.url2)
  }
  postProducts(product:Products):Observable<Products>{
    return this.http.post<Products>(this.url2, product)
  }
  postProductById(id:number, product: Products):Observable<Products>{
    return this.http.put<Products>(`${this.url2}/${id}`, product)
  }
  getProductById(id:number):Observable<Products>{
    return this.http.get<Products>(`${this.url2}/${id}`)
  }
}
