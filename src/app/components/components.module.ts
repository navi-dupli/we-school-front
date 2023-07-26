import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {CustomButtonComponent} from "./custom-button/custom-button.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomButtonComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomButtonComponent
  ]
})
export class ComponentsModule { }
