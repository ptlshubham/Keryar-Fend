import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  users:any=[];
  
  empid:any;
  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    
    this.GetUser();
  }
  GetUser(){
    this.apiservice.GetEmployeeList().subscribe((res:any)=>{
      this.users = res;
    })
  }
  deleteclient(uid){
    this.empid = uid;
  }
  confirm(){
    this.apiservice.showNotification('top','right','Employee is deleted Successfully!','success');
    // this.apiservice.DeleteClient(this.empid).subscribe((res:any)=>{
      
    // })
  }
 


}
