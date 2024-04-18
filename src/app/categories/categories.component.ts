import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories:any[]=[];
  public comments:any[]=[];
  constructor(private api: ApiService) { }

public showCategorues(){
  return this.api.getCategories().subscribe(data => this.categories=data);
}

public myComments(){
  return this.api.getAllComments().subscribe(comm => this.comments=comm);
}

  ngOnInit(): void {
    this.showCategorues();
    this.myComments();
  }

}
