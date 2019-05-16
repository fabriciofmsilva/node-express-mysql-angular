import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {Job} from "./Job";

@Injectable({
  providedIn: 'root'
})
export class JobRepositoryService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>("http://localhost:3000/jobs");
  }
}
