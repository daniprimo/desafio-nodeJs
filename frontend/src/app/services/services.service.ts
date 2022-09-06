import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  services: Service[] = [];

  constructor(private http: HttpClient, private router: Router) {}
}
