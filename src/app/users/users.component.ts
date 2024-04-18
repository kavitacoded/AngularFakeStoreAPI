import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public Users:any[]=[];

  constructor(private api: ApiService) { }


  public showUsers(){
    this.api.getAllUsers().subscribe(datas => this.Users=datas);
  }

  ngOnInit(): void {
    this.showUsers();
  }

}
