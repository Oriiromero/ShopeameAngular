import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent  implements OnInit{

  name!: string;

  products!: any;

  productsAmount!: number;

  searchedProducts!: any;

  listView: boolean = false;

  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(res => {
      console.log(res);
      this.products = res as [];
      this.productsAmount = this.products.length;

      this.searchedProducts = this.products;
    })
  }

  searchProduct(){
    this.searchedProducts = this.products.filter((product: any) => product.name.toLowerCase().includes(this.name));

    console.log(this.name);
    console.log(this.searchedProducts);
  }

  changeToggle(){
    this.listView = !this.listView;
  }
 

}
