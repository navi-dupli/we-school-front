import { Component, OnInit } from '@angular/core';
import {GradesService} from '../../services/grades/grades.service';
import {CustomDialogComponent} from '../../components/custom-dialog/custom-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-grades',
  templateUrl: './list-grades.component.html',
  styleUrls: ['./list-grades.component.css']
})
export class ListGradesComponent implements OnInit {

  degrees = [];
  constructor(private gradesService: GradesService,  public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getDegrees()
  }

  getDegrees() {
    this.gradesService.getDegrees().subscribe((data) => {
      this.degrees = data.degrees;
    })
  }

  deleteGrade(grade: any) {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {grade},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.gradesService.deleteGrade(result.grade._id).subscribe((data: any) => {
        if (data.success) {
          this.getDegrees();
        }
      })
    });
  }

  editGrade(grade: any) {
    this.router.navigateByUrl(`/editar-grado/${grade._id}`);
  }
}
