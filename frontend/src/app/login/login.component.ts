import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistryService } from './../user-registry/user-registry.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(
    private userRegistryService: UserRegistryService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

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
    //busca todos os usuários
    this.userRegistryService
      .getUsers()
      .subscribe((users) => (this.users = users));

    //acha o usuário com o e-mail a logar
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === email) {
        this.actualUser = this.users[i];
      }
    }

    //verifica se o usuário foi achado
    if (this.actualUser) {
      //verifica se o usuário informou a senha correta
      if (this.actualUser.password == this.form.get('password')?.value) {
        this.isConnected = true;
        this._snackBar.open(`Bem vinda ${this.actualUser.name}`, '', {
          duration: 2000,
        });
        this.router.navigate(['userHome']);
      } else {
        this._snackBar.open('Senha informada está incorreta', 'Voltar', {
          duration: 2000,
        });
      }
    } else {
      this.isConnected = false;
      this._snackBar.open('Usuário não registrado.', 'Voltar', {
        duration: 2000,
      });
    }

    return this.isConnected;
  }
}
