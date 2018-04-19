import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

    getList(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:8080/ws/read');
    }

    getEmail() {
      return this.http.get('http://localhost:8080/ws/user');
    }
}
