import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string;
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}