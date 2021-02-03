import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService{

  constructor(private httpClient: HttpClient) { }

  public getData(){
    
    return this.httpClient.get(`https://api.chucknorris.io/jokes/random`);
  }


}


