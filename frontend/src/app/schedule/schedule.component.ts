import { UserRegistryService } from './../user-registry/user-registry.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HairJob } from '../models/hair-job.model';
import { HairService } from '../hair-service/hair-service.service';

const services = require('../../assets/services.json');
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class ScheduleComponent implements OnInit {
  hairJobs: HairJob[] = [];
  selected!: Date;
  availableTimes = ['08:00', '09:00', '10:00'];
  form!: FormGroup;

  constructor(
    private hairService: HairService,
    private userService: UserRegistryService
  ) {}

  ngOnInit(): void {}

  onSubmit() {}
}
