import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import { ClientService } from '../client.service';
import { SocialAccounts } from './socialacc.model';


@Component({
  selector: 'app-socialacc',
  templateUrl: './socialacc.component.html',
  styleUrls: ['./socialacc.component.css']
})
export class SocialaccComponent implements OnInit {
  public clientList: [] = [];
  addclientflag: boolean = false;
  fb: any = [];
  fbindex: number = 0;
  insta: any = [];
  instaindex: number = 0;
  public SocialAccountModel: SocialAccounts = new SocialAccounts;
  public socialAccount: SocialAccounts[] = [];
  constructor(
    public apiservice: ApiService,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.GetUser();
  }
  GetUser() {
    this.apiservice.GetClientList().subscribe((res: any) => {
      this.clientList = res;
    })
  }
  AddAccounts() {
    if (this.addclientflag == false) {
      this.addclientflag = true;
    }
    else {
      this.addclientflag = false;
    }
  }
  Addmorefb() {
    this.fbindex++;
    this.fb.push({ name: this.fbindex });

  }
  Addmoreinsta() {
    this.instaindex++;
    this.insta.push({ name: this.instaindex });

  }
  Closefb(index) {
    debugger
    if (this.fb.length == 1) {
      this.fb = [];
    }
    else {
      this.fb.splice((index - 1), 1);
    }

  }
  Closeinsta(index) {
    if (this.insta.length == 1) {
      this.insta = [];
    }
    else {
      this.insta.splice((index - 1), 1);
    }

  }
  saveSocialAc() {
    this.clientService.saveSocialAccounts(this.SocialAccountModel).subscribe(response => {
      this.apiservice.showNotification('top', 'right', 'Main Category added Successfully.', 'success');
    })
  }
}
