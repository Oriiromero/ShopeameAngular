import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductI } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("https://shopeame-api.vercel.app/products")
  }
}
