import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistryService } from './../user-registry/user-registry.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  users: User[] = [];
  isConnected: boolean = false;
  actualUser: User = new User();
  constructor(private userRegistryService: UserRegistryService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  logar(email: string): boolean {
    this.userRegistryService
      .getUsers()
      .subscribe((users) => (this.users = users));

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === email) {
        this.actualUser = this.users[i];
      }
    }

    if (this.actualUser) {
      if (this.actualUser.password === this.form.get('password')?.value) {
        this.isConnected = true;
        console.log('Você está logado');
      } else {
        console.log('Senha incorreta');
      }
    } else {
      this.isConnected = false;
      console.log('Usuário não registrado');
    }

    return this.isConnected;
  }
}
