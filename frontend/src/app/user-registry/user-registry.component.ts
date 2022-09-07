import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

import { Address } from '../models/address.model';
import { MyErrorStateMatcher } from '../shared/my-error-state-matcher.component';
import { UserRegistryService } from './user-registry.service';

@Component({
  selector: 'app-user-registry',
  templateUrl: './user-registry.component.html',
  styleUrls: ['./user-registry.component.css'],
})
export class UserRegistryComponent implements OnInit {
  form!: FormGroup;
  isLoading: boolean = false;
  address!: Address;
  user!: User;
  users: User[] = [];

  matcher = new MyErrorStateMatcher();

  constructor(
    public userRegistryService: UserRegistryService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm(new User());
    this.getUsers();
  }

  createForm(user: User) {
    this.form = new FormGroup({
      cpf: new FormControl(user.cpf, {
        validators: [Validators.required, Validators.minLength(11)],
      }),
      name: new FormControl(user.name, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl(user.email, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(user.password, {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      phone: new FormControl(user.phone, {
        validators: [Validators.required, Validators.minLength(11)],
      }),
    });

    this.user = user;
  }

  add(user: User): void {
    this.userRegistryService.addUser(user).subscribe((user) => {
      this.users.push(user);
    });
  }
  getUsers() {
    this.userRegistryService.getUsers().subscribe((users) => {
      users.forEach((user) => {
        this.users.push(user);
        console.log(user);
      });
    });
  }

  onSubmit() {
    const user: User = new User();
    user.cpf = this.form.get('cpf')?.value;
    user.email = this.form.get('email')?.value;
    user.name = this.form.get('name')?.value;
    user.password = this.form.get('password')?.value;
    user.phone = this.form.get('phone')?.value;

    if (!this.form.invalid) {
      this.add(user);
      this.form.reset(new User());
    }
  }
}
