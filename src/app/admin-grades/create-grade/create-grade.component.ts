import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GradesService} from '../../services/grades/grades.service';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.css']
})
export class CreateGradeComponent implements OnInit {
  form: FormGroup;
  constructor(private gradesService: GradesService) {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    const data = this.form.getRawValue();
    this.gradesService.saveGrade(data).subscribe((res: any) => {
      if (res.status) {

      } else {

      }
    })
  }
}
