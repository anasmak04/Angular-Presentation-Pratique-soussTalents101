import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers:any;
  constructor(private httpclient:HttpClient) { 
    this.listUsers=[];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.httpclient.get("https://jsonplaceholder.typicode.com/users").subscribe((result) =>{
      this.listUsers=result;
    console.log(this.listUsers);
    })
  }

}
