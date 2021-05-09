import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
  //to receive data from parent as input
  @Input() productobj:Product;

  //create custom event
 @Output() myEvent = new EventEmitter()

 sendProductDetailsToParent(productTitle){
  //emit data to parent
  this.myEvent.emit(productTitle);
 }
}
