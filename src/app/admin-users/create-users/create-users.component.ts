import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  userForm: FormGroup;
  constructor(private usersService: UsersService,
              private router: Router) {
    this.userForm = new FormGroup({
      code: new FormControl(""),
      name: new FormControl(""),
      email: new FormControl(""),
      role: new FormControl(""),
      password: new FormControl(""),
      status: new FormControl("")
    });
  }

  ngOnInit() {

  }

  createUser() {
    const body = {
      code: this.userForm.value.code,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      role: this.userForm.value.role,
      name: this.userForm.value.name,
      status: this.userForm.value.status,
    }

    this.usersService.createUser(body).subscribe(data => {
      if (data) {
        this.router.navigateByUrl('/usuarios');
      }
    });
  }
}
