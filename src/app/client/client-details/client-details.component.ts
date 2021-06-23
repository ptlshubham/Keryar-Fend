import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'app/service/api.service';
import { ClientService } from '../client.service';
import { Client } from './client-details.model';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  clientsRegForm: FormGroup;
  users: any = [];
  empid: any;
  addclientflag: boolean = false;
  public client: Client[] = [];
  public clientList: [] = [];
  roles: any = []
  selectedRole: any[];
  editclient: any = {};
  selectedRoleId:any;
  constructor(
    private apiservice: ApiService,
    private clientService: ClientService,
    private fm: FormBuilder,
  ) {
    this.roles = [
      // {
      //   name: 'Admin',
      //   id: '1'
      // },
      {
        name: 'Employee',
        id: '2'
      },
      {
        name: 'Client',
        id: '3'
      }
    ]
  }

  ngOnInit(): void {
    this.GetUser();

  }
  selectRole(data) {
    this.roles.forEach(element => {
      if (element.name == data.name) {
        this.selectedRole = element.name;
        this.selectedRoleId = element.id;
      }
    })

  }
  addclient() {
    if (this.addclientflag == false) {
      this.addclientflag = true;
    }
    else {
      this.addclientflag = false;
    }
  }
  ComparePass(repass, pass) {
    debugger
    if (repass != pass) {
      alert("password doesnot match!");
    }
  }
  GetUser() {
    this.users = [];
    this.apiservice.GetClientList().subscribe((res: any) => {
      this.clientList = res;
    })
  }
  AddNewClient(data) {
    var obj = {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      password: data.password,
      role: 3,
      active: 1
    }
    this.apiservice.AddNewClient(obj).subscribe((res: any) => {
      this.GetUser();

    })
  }

  deleteclient(uid) {
    this.empid = uid;
  }
  confirm() {

    this.apiservice.DeleteClient(this.empid).subscribe((res: any) => {
      this.apiservice.showNotification('top', 'right', 'Client is deleted Successfully!', 'success');
      this.GetUser();
    })
  }
  editClients(data) {
    debugger
    this.editclient = data;
    this.selectedRole = data.rolename;
    this.roles.forEach(element => {
      if(element.name == data.name){
        this.selectedRoleId = element.role;
      }
      
    });
  }
  updateClientDetails(data) {
    data.selectedRoleId = this.selectedRoleId;
    this.clientService.updateClients(data).subscribe((req) => {
      console.log(req);
      this.apiservice.showNotification('top', 'right', 'Successfully updated.', 'success');
      this.GetUser();
    })
  }
}
