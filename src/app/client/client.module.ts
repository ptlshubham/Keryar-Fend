import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { FormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { SocialaccComponent } from './socialacc/socialacc.component';
import { ClientService } from './client.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'client',
        component:ClientComponent
      },{
        path:'client-detail',
        component:ClientDetailsComponent
      },

      {
        path:'socialacc',
        component:SocialaccComponent
      }
    ]),
    FormsModule,
    HttpModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    HttpClientModule,
  ],
  declarations: [ClientComponent, ClientDetailsComponent, SocialaccComponent],
  providers: [
    ClientService
  ],
})
export class ClientModule { }
