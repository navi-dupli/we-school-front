import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users = [];
  constructor(private usersService: UsersService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data.users;
    })
  }

  editUser(user) {
    this.router.navigateByUrl(`/editar-usuario/${user._id}`);
  }

  deleteUser(user) {

  }

}
