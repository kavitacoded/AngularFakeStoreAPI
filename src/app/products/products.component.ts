import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public Products:any[]=[];

  constructor(private api: ApiService) { }

  public getProducts(){
    this.api.getAllProducts().subscribe(p => this.Products =p);
  }


  ngOnInit(): void {
    this.getProducts();
  }

}
