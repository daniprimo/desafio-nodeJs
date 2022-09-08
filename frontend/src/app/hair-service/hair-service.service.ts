import { HairJob } from './../models/hair-job.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HairService {
  url: string = 'http://localhost:3000/service';
  constructor(private http: HttpClient, private router: Router) {}

  getHairJobs(): Observable<HairJob[]> {
    return this.http.get<HairJob[]>(this.url);
  }

  getHairJobById(idHairJob: number): Observable<HairJob> {
    return this.http.get<HairJob>(this.url + `/${idHairJob}`);
  }
  addHairJob(hairJob: HairJob): Observable<HairJob> {
    return this.http.post<HairJob>(this.url, hairJob);
  }

  deleteHairJob(idHairJob: number): Observable<HairJob> {
    return this.http.delete<HairJob>(this.url + `/${idHairJob}`);
  }

  updateHairJob(hairJob: HairJob) {
    this.http.patch(this.url, hairJob);
  }
}
