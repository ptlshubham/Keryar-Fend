import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'employee',
        component:EmployeeComponent
      }
    ]),
    FormsModule
  ],
  declarations: [EmployeeComponent],
})
export class EmployeeModule { }
