import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service.model';
const services = require('../../assets/services.json');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: Service[] = services;
  constructor() {}

  ngOnInit(): void {}
}
