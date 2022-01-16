import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  save(user: any) {
    return this.http.post(this.url, user);
  }
}