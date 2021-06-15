import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import { Client } from './client-details.modle';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  users:any=[];
  empid:any;
  addclientflag:boolean=false;
  public client:Client[]=[];
  public clientList:[]=[];
  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    this.GetUser();
   
  }
  addclient(){
    if(this.addclientflag == false){
      this.addclientflag=true;
    }
    else{
      this.addclientflag=false;
    }
  }
  ComparePass(repass,pass){
    debugger
    if(repass != pass){
      alert("password doesnot match!");
    }
  }
  GetUser(){
    this.users=[];
    this.apiservice.GetClientList().subscribe((res:any)=>{
      this.clientList = res;
    })
  }
  AddNewClient(data){
    var obj={
      name:data.name,
      mobile:data.mobile,
      email:data.email,
      password:data.password,
      role:3,
      active:1
    }
    this.apiservice.AddNewClient(obj).subscribe((res:any)=>{
      this.GetUser();

    })
  }
  
  deleteclient(uid){
    this.empid = uid;
  }
  confirm(){
  
    this.apiservice.DeleteClient(this.empid).subscribe((res:any)=>{
      this.apiservice.showNotification('top','right','Client is deleted Successfully!','success');
      this.GetUser(); 
    })
  }                                                                                               

}
