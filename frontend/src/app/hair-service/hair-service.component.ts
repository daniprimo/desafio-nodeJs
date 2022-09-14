import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { HairJob } from './../models/hair-job.model';
import { HairService } from './hair-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './hair-service.component.html',
  styleUrls: ['./hair-service.component.css'],
})
export class HairServiceComponent implements OnInit {
  hairServices: HairJob[] = [];
  form!: FormGroup;
  formEditable!: FormGroup;
  hairJob!: HairJob;
  hairJobUpdate!: HairJob;
  newHairJob!: HairJob;
  isFormInvalid = false;

  constructor(
    private hairService: HairService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getHairJobs();

    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
    });
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

  updateHairJob(updateHairJob: HairJob) {
    this.hairService.updateHairJob(updateHairJob).subscribe();
  }

  clearInput() {
    this.form.reset();
  }
  openEditDialog(id: number) {
    this.hairService
      .getHairJobById(id)
      .subscribe((hairJob) => (this.hairJobUpdate = hairJob));
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: {
        name: this.hairJobUpdate.name,
        description: this.hairJobUpdate.description,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.newHairJob = {
          id: id,
          name: result.name,
          description: result.description,
        };
        this.updateHairJob(this.newHairJob);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.addHairJob(
        this.form.get('name')?.value,
        this.form.get('description')?.value
      );
      this.form.reset();
    } else {
      if (!this.form.get('name')?.valid) {
        alert('Informe um nome para o serviço');
      }
      if (!this.form.get('description')?.valid) {
        alert('Informe uma descrição para o serviço');
      }
    }
  }
}
