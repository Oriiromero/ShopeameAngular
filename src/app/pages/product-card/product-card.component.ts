import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent{

  @Input() product!: any;

  pixelPercentage!: number;

  ngOnInit(): void {
    
    this.pixelPercentage = 100 / 5 * this.product.stars;

    console.log(this.pixelPercentage);

  }
}
