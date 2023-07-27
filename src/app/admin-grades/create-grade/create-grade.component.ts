import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GradesService} from '../../services/grades/grades.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.css']
})
export class CreateGradeComponent implements OnInit {
  gradeId: string;
  form: FormGroup;
  constructor(private gradesService: GradesService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.gradeId = this.route.snapshot.paramMap.get('id');
    this.setForm();
  }


  onSubmit() {
    const data = this.form.getRawValue();
    if (!this.gradeId) {
      this.gradesService.saveGrade(data).subscribe((res: any) => {
        if (res.success) {
          this.router.navigateByUrl('/grados');
        }
      })
    } else {
      this.gradesService.updateGrade(data, this.gradeId).subscribe((res: any) => {
        if (res.success) {
          this.router.navigateByUrl('/grados');
        }
      })
    }
  }

  setForm() {
    if (this.gradeId) {
      this.gradesService.getGrade(this.gradeId).subscribe((data: any) => {
        if (data.success) {
          this.form.controls['code'].setValue(data.grade.code);
          this.form.controls['name'].setValue(data.grade.name);
        }
      });
    }
  }
}
