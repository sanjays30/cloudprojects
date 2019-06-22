import { Component, OnInit } from '@angular/core';
import { Environment } from '../../shared/environment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  roleList: Array<string> = [''];
  loggedIn:boolean;
  username:string;
  constructor(
    private env:Environment) { }

  ngOnInit() {
  }

  onLogout(){

  }
}
