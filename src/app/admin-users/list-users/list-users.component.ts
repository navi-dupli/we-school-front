import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CustomDialogComponent} from "../../components/custom-dialog/custom-dialog.component";

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
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {user},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.usersService.deleteUser(result.user._id).subscribe(data => {
        if (data.success) {
          this.getUsers();
        }
      });
    });
  }

}
