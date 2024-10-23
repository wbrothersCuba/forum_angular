import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public identity: User;
  public token: string;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.page_title = "Sign In";
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this._userService.signup(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          // user data
          this.identity = response.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));
          // user token
          this._userService.signup(this.user, true).subscribe(
            response => {
              if (response.token) {
                this.token = response.token;
                localStorage.setItem('token', JSON.stringify(this.token));
                this.status = 'success';
                this._router.navigate(['/inicio']);
              } else {
                this.status = 'error';
              }
            }, error => {
              console.log(error);
            }
          );

        } else {
          this.status = 'error';
        }
      }, error => {
        console.log(error);
      }
    );
  }

}
