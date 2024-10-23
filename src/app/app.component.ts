import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Wbrothers foro';
  public identity;
  public token;
  public url;
  public search;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio']);
  }

  goSearch(){
    this._router.navigate(['/buscar',this.search]);
  }

}
