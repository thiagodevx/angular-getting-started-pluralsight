import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product  List';
  showImage = true;
  ratingsClickedMessage: number;
  _listFilter: string;
  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(listFilter) {
    this._listFilter = listFilter;
    this.performFilter();
  }

  performFilter() {
    if (this.listFilter) {
      const filterByName = (product: Product) => product.productName.toLowerCase().indexOf(this.listFilter.toLowerCase()) !== -1;
      this.filteredProducts = this.products.filter(filterByName);
    } else {
      this.filteredProducts = this.products;
    }
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.performFilter();
  }

  onNotify(event: number) {
    this.ratingsClickedMessage = event;
  }

}
