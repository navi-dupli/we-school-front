import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {ListUsersComponent} from "./list-users/list-users.component";
import {AdminUsersComponent} from "./admin-users.component";
import {CreateUsersComponent} from "./create-users/create-users.component";
import {ComponentsModule} from "../components/components.module";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ComponentsModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    AdminUsersComponent,
    ListUsersComponent,
    CreateUsersComponent
  ]
})

export class AdminUsersModule {}
