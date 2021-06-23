import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from 'app/client/client.service';
import { EmployeeService } from './employee.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'employee',
        component: EmployeeComponent
      }
    ]),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [EmployeeComponent],
  providers: [
    ClientService,
    EmployeeService
  ]
})
export class EmployeeModule { }
