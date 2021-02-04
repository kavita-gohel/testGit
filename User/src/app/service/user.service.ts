import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any>{
    
    return this.httpClient.get(`https://my.api.mockaroo.com/user.json?key=6a7df540`);
  }
}
