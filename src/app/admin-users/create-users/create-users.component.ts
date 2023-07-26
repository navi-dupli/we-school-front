import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  userForm: FormGroup;
  userId: any;
  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) {
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
    this.userId = this.route.snapshot.paramMap.get('id');
    this.setForm();
  }

  setForm() {
    if (this.userId) {
      this.usersService.getUser(this.userId).subscribe(data => {
        if (data.success) {
          const user = data.user.local;
          this.userForm.controls['code'].setValue(user.code);
          this.userForm.controls['name'].setValue(user.name);
          this.userForm.controls['email'].setValue(user.email);
          this.userForm.controls['role'].setValue(user.role);
          this.userForm.controls['password'].setValue(user.password);
          this.userForm.controls['status'].setValue(user.status);
        }
      });
    }
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

    if (!this.userId) {
      this.usersService.createUser(body).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/usuarios');
        }
      });
    } else {
      this.usersService.updateUser(body, this.userId).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/usuarios');
        }
      });
    }

  }

  cancel() {
    this.router.navigateByUrl('/usuarios');
  }
}
