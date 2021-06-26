import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static HOST_URL: string = "http://localhost:1337";
  base_path = 'http://localhost:1337';

  constructor(
    private http: HttpClient
  ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  httpOption1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  public static updateClientsURL: string = ApiService.HOST_URL + '/admin/UpdateClientsDetails';
  public static saveEmployeeURL: string = ApiService.HOST_URL + '/admin/AddNewClient';
  public static saveSocialAcccountsURL: string = ApiService.HOST_URL + '/admin/AddSocialAccounts';


  Login(data) {
    return this.http.post(this.base_path + '/login/login', JSON.stringify(data), this.httpOptions).pipe(

    )
  }
  GetEmployeeList() {
    return this.http.get(this.base_path + '/admin/GetEmployeeList', this.httpOptions).pipe(
      map(res => res)
    )
  }
  GetClientList() {
    return this.http.get(this.base_path + '/admin/GetClientList', this.httpOptions).pipe(
      map(res => res)
    )
  }
  getmessages(data) {
    return this.http.post(this.base_path + '/admin/GetMessage', JSON.stringify(data), this.httpOptions).pipe(

    )
  }
  DeleteClient(uid) {
    return this.http.get(this.base_path + '/admin/DeleteClient/' + uid, this.httpOptions).pipe(
      map(res => res)
    )
  }
  AddNewClient(data) {
    return this.http.post(this.base_path + '/admin/AddNewClient', JSON.stringify(data), this.httpOptions).pipe(

    )
  }
  showNotification(from, align, msg, color) {
    debugger

    var color = color;

    $.notify({
      icon: "ti-gift",
      message: msg
    }, {
      type: color,
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    });
  }
}
function throwError(arg0: string) {
  throw new Error('Function not implemented.');
}

