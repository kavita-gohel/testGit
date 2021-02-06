import { SingleUserComponent } from './../single-user/single-user.component';
import { Observable } from 'rxjs';
import { UserService } from './../../service/user.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
 
  // uname: any
  // contact: any
  // value: any
  // name: Array<any> =['cbrobak0','mbradnocke1','zmorcomb2','bconey3','cmatuskiewicz4	','bdrover5','gbuxey6','jrembrant7','lcurrell8','eohannigan9'];
  // email: Array<any> = ['cbrobak0@amazon.com','mbradnocke1@un.org','zmorcomb2@craigslist.org','bconey3@umn.edu','cmatuskiewicz4@exblog.jp','bdrover5@clickbank.net','gbuxey6@odnoklassniki.ru','jrembrant7@delicious.com','lcurrell8@csmonitor.com','eohannigan9@scribd.com'];
  // con_no : Array<any> = ['+33 517 114 9741','+351 805 514 2945','+30 127 925 1970','+254 965 129 5023','+86 635 738 7603','+46 637 798 9542','+86 549 418 2176','+234 927 394 9252','+7 702 957 3885','+386 990 344 4729'];
  // mail: any;
  // moNo: any;
  // httpClient: any;
    user : any
  UserService: any;
  name: any;
  data: any
  //@Output() opToProfile = new EventEmitter<any>();
 
  //public userData = [];
  constructor(private _userService : UserService, private router: Router) { }
     ngOnInit(): void {
     this.user = this._userService.getData();
    }
    viewProfile(data: any){
    this.data =  data;
  //  this.router.navigate( ['profile'], { queryParams: {data}});
      
    this.router.navigateByUrl('/profile', { state: { view: this.data } });

    }

  


}