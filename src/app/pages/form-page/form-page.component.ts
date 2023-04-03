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

  product: ProductI;
  pixelPercentage!: number;

  constructor(private http: HttpClient) { 
    this.product = {
      id : 0,
      image : '',
      name: '',
      price: undefined,
      description: '',
      stars: undefined
    }

  }

  postProducts(products: ProductI){
    this.http.post("http://localhost:3000/products", products).subscribe((res)=> alert('Producto ya guardado.'));
  }
  
  ngOnInit(): void {
    
   this.calculatePixels();

  }

  calculatePixels(){
    this.pixelPercentage = 100 / 5 * this.product.stars;

    console.log(this.pixelPercentage);
  }
  
}
