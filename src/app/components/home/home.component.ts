import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  public identity;

public page_title: string;
  constructor(private _userService: UserService) {
    this.identity = this._userService.getIdentity();
   }

  ngOnInit() {
    this.page_title = "Welcome to the coding forum"
  }

}
