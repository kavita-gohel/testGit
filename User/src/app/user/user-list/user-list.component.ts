import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = 'User-data'
  uname: any
  contact: any
  email: any
  value: any
  constructor(private UserService:  UserService) { }
 
  ngOnInit(): void {
    this.UserService.getData().subscribe((data:any)=>{
      console.log(data);
      this.value=data;
      
    });
  
}
}


