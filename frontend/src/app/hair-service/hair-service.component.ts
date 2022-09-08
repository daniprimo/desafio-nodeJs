import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HairJob } from './../models/hair-job.model';
import { HairService } from './hair-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './hair-service.component.html',
  styleUrls: ['./hair-service.component.css'],
})
export class HairServiceComponent implements OnInit {
  hairServices: HairJob[] = [];
  form!: FormGroup;
  hairJob!: HairJob;

  constructor(private hairService: HairService) {}

  ngOnInit(): void {
    this.getHairJobs();
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
}
