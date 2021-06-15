import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatboxComponent } from './chatbox.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
 const config: SocketIoConfig = { url: 'http://localhost:3001', options:{transport:['websocket']} };


@NgModule({
  declarations: [ChatboxComponent],
  imports: [
    CommonModule,
    FormsModule,
     SocketIoModule.forRoot(config),
    RouterModule.forChild([
      {
        path:'chatbox',
        component:ChatboxComponent
      }
    ])
  ]
})
export class ChatboxModule { }
