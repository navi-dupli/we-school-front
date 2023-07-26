import { Component, OnInit } from '@angular/core';
import {GradesService} from '../../services/grades/grades.service';

@Component({
  selector: 'app-list-grades',
  templateUrl: './list-grades.component.html',
  styleUrls: ['./list-grades.component.css']
})
export class ListGradesComponent implements OnInit {

  degrees = [];
  constructor(private gradesService: GradesService) { }

  ngOnInit() {
    this.getDegrees()
  }

  getDegrees() {
    this.gradesService.getDegrees().subscribe((data) => {
      this.degrees = data.degrees;
    })
  }

}
