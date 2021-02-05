import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any>{
    
    return this.httpClient.get(`https://my.api.mockaroo.com/user.json?key=089d2540`);

  }
  public getProfile(): Observable<any>{
    return this.httpClient.get(`https://my.api.mockaroo.com/profile.json?key=6a7df540`);
  }
}
