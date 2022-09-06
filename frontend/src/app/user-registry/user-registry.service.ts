import { Address } from './../models/address.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Subject } from 'rxjs/internal/Subject';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { json } from 'stream/consumers';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class UserRegistryService {
  private userUrl = 'http://localhost:3000/user';
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/user');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => {
        console.log(`added user w/ cpf = ${newUser.cpf}`);
      })
    );
  }

  /*  getUserByCpf(cpf: string) {
    return this.http.get('http://localhost:3000/user/' + cpf, {
      responseType: 'json',
      withCredentials: false,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    });
  } */
}
