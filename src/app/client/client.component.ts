import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  users:any=[];
  empid:any;
  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    this.GetUser();
  }
  GetUser(){
    this.apiservice.GetClientList().subscribe((res:any)=>{
      this.users = res;
    })
  }
  deleteclient(uid){
    this.empid = uid;
  }
  confirm(){
    this.apiservice.showNotification('top','right','Client is deleted Successfully!','success');
    // this.apiservice.DeleteClient(this.empid).subscribe((res:any)=>{
      
    // })
  }


}
