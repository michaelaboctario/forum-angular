import { Component, OnInit } from '@angular/core';

import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
