import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from 'app/service/api.service';
import { Observable } from 'rxjs';
import { Client } from './client-details/client-details.model';
import { SocialAccounts } from './socialacc/socialacc.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  saveSocialAccounts(admin:SocialAccounts): Observable<any> {
    return this.httpClient.post<any>(ApiService.saveSocialAcccountsURL, admin);
  }
  updateClients(admin: Client): Observable<any> {
    return this.httpClient.post<any>(ApiService.updateClientsURL, admin);
  }

}


