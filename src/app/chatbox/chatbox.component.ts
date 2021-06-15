import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { webSocket } from "rxjs/webSocket";
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
 
 
  clients:any=[];
  messages:any=[];
  receiver:any;
  notchat:boolean=false;
  message:any;
  userid=localStorage.getItem("UserId");
  uname=localStorage.getItem("Username");
  client:any;
  constructor(
    private apiservice:ApiService,
    private socket: Socket  ) { 
     
    this.socket.connect();
    this.socket.emit('set-nickname', this.uname);
    this.GetClient();
  }

  ngOnInit(): void {
   
   
}
  GetClient(){
    this.apiservice.GetClientList().subscribe((res:any)=>{
      this.clients = res;
    })
  }
  OpenChat(uid , name){
    this.receiver =uid;
    this.client = name;
    this.notchat = true;
    this.getMessages().subscribe((message:any) => {
      this.messages.push(message.data);
    });
   
  }
  sendMessage() {
    debugger
    this.socket.emit('add-message', { message: this.message,sender:this.userid,receiver:this.receiver });
    this.message = '';
  }
  getMessages() {
    let data={
      sender:localStorage.getItem("UserId"),
      receiver:this.receiver
    }
    this.apiservice.getmessages(data).subscribe((res:any)=>{
      this.messages = res;
    })
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data); 
      });
    })
    return observable;
  }
 

}
