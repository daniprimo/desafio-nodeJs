import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HairJob } from './../models/hair-job.model';
import { HairService } from './hair-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './hair-service.component.html',
  styleUrls: ['./hair-service.component.css'],
})
export class HairServiceComponent implements OnInit {
  hairServices: HairJob[] = [];
  form!: FormGroup;
  hairJob!: HairJob;
  newHairJob!: HairJob;

  @Input('name') inputName: string = '';
  @Input('description') inputDescription: string = '';

  constructor(
    private hairService: HairService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getHairJobs();

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      descriiption: [null, [Validators.required]],
    });
  }

  createForm(hairJob: HairJob) {
    this.form = new FormGroup({
      name: new FormControl(hairJob.name),
      description: new FormControl(hairJob.description),
    });
    this.hairJob = hairJob;
  }
  getHairJobs() {
    this.hairService.getHairJobs().subscribe((services) => {
      this.hairServices = services;
    });
  }

  getHairJobById(id: number) {
    this.hairService.getHairJobById(id).subscribe((service) => {
      this.hairJob = service;
    });
  }

  deleteHairJob(hairjob: HairJob) {
    this.hairServices = this.hairServices.filter((h) => h !== hairjob);
    this.hairService.deleteHairJob(hairjob.id).subscribe();
  }

  addHairJob(name: string, description: string) {
    this.hairService
      .addHairJob({ name, description } as HairJob)
      .subscribe((hairJob) => {
        this.hairServices.push(hairJob);
      });
  }

  updateHairJob(hairJobId: number, updateHairJob: HairJob) {
    this.hairService.updateHairJob(hairJobId, updateHairJob);
  }

  clearInput() {
    this.form.patchValue({ name: null, description: null });
  }
}
