import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello spring-boot-security-dataJPA-OAuth2-Google and angular 5';

  users;
  dataGmail;

  constructor(private _userService: UserService) { }

  getList(): void {
    this._userService.getList().subscribe(
     data  => { this.users = data; },
     err => console.log(err),
     () => console.log('donde loading user')
    );

  }

  getUser(): void {
    this.dataGmail = this._userService.getEmail();
  }

  ngOnInit() {
    this.getList();
    this.getUser();
  }

}
