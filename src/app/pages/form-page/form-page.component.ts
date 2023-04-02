import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { HttpClient } from '@angular/common/http';
import { ProductI } from 'src/app/shared/interfaces/card.interface';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  constructor(private http: HttpClient) { }

  postProducts(products: ProductI){
    this.http.post("http://localhost:3000/products", products).subscribe((res)=> console.log(res));
  }
  
  
}
