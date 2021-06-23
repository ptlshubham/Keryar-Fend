import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Client } from 'app/client/client-details/client-details.model';
import { ApiService } from 'app/service/api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

    saveEmployee(admin:Client): Observable<any> {
      debugger
      return this.httpClient.post<any>(ApiService.saveEmployeeURL, admin);
    }
  
}


