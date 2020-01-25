import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product  List'
  product: Product = []
  
  constructor() { }

  ngOnInit() {
  }

}
