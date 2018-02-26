import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/jsonn'})
};

@Injectable()
export class DemoService {
  private corsUrl ='https://cors-anywhere.herokuapp.com/';
  private dataUrl = 'http://envitayninh.com/api/Values/GetLatestData?user_id=1&station_id=8';
  constructor(private http: HttpClient) { }
  getFoods() {
    return this.http.get(this.corsUrl+this.dataUrl);
  }
}
