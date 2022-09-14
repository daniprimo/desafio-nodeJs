import { HairJob } from './../models/hair-job.model';
import { HairServiceComponent } from './../hair-service/hair-service.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HairServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HairJob
  ) {}

  ngOnInit(): void {}
  onNoClick() {
    this.dialogRef.close();
  }
}
