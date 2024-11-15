import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';
  page: number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  filterProducts() {
    return this.products.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  paginate(array: any[], pageSize: number, pageNumber: number) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
}
