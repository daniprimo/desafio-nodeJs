import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { cp } from 'fs';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { tap } from 'rxjs/operators';

import { User } from '../models/user.model';

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
        alert('Usuário adicionado com sucesso');
      })
    );
  }

  getUserByCpf(cpf: string): Observable<User> {
    return this.http.get<User>(this.userUrl + `/${cpf}`);
  }
}
