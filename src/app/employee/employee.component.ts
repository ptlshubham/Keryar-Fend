import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from 'app/client/client-details/client-details.model';
import { ClientService } from 'app/client/client.service';
import { ApiService } from 'app/service/api.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  addemployeeflag: boolean = false;
  users: any = [];
  empRegForm: FormGroup;
  empid: any;
  roles: any = []
  selectedRole: any[];
  editemployee: any = {};
  selectedRoleId: any;
  public ClientModel: Client = new Client;
  public employee: Client[] = [];
  constructor(
    private apiservice: ApiService,
    private employeeService: EmployeeService,
    private clientService: ClientService
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
  GetUser() {
    this.apiservice.GetEmployeeList().subscribe((res: any) => {
      this.users = res;
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
    // this.apiservice.showNotification('top', 'right', 'Employee is deleted Successfully!', 'success');
    // this.apiservice.DeleteClient(this.empid).subscribe((res:any)=>{

    // })
  }
  selectRole(data) {
    this.roles.forEach(element => {
      if (element.name == data.name) {
        this.selectedRole = element.name;
        this.selectedRoleId = element.id;
      }
    })

  }
  editEmployee(data) {
    debugger
    this.editemployee = data;
    this.selectedRole = data.rolename;
    this.roles.forEach(element => {
      if (element.name == data.name) {
        this.selectedRoleId = element.role;
      }

    });
  }
  updateEmployeeDetails(data) {
    data.selectedRoleId = this.selectedRoleId;
    this.clientService.updateClients(data).subscribe((req) => {
      console.log(req);
      this.apiservice.showNotification('top', 'right', 'Successfully updated.', 'success');
      this.GetUser();
    })
  }
  addEmployee() {
    if (this.addemployeeflag == false) {
      this.addemployeeflag = true;
    }
    else {
      this.addemployeeflag = false;
    }
  }
  addNewEmployee() {
    this.ClientModel.role = 2;
    this.ClientModel.isactive = 1;
    this.employeeService.saveEmployee(this.ClientModel).subscribe(response => {
      this.apiservice.showNotification('top', 'right', 'Main Category added Successfully.', 'success');
    })
  }
  ComparePass(repass, pass) {
    if (repass != pass) {
      alert("password doesnot match!");
    }
  }
}
