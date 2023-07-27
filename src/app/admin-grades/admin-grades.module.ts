import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {ListGradesComponent} from './list-grades/list-grades.component';
import {AdminGradesComponent} from './admin-grades.component';
import {ComponentsModule} from '../components/components.module';
import {CreateGradeComponent} from './create-grade/create-grade.component';
import {MatIconModule} from '@angular/material/icon';

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
  ],
  declarations: [
    AdminGradesComponent,
    ListGradesComponent,
    CreateGradeComponent
  ]
})

export class AdminGradesModule {}
