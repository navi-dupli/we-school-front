import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {
  test : Date = new Date();

  @Input() color: any;
  @Input() icon: string;
  @Input() url: string;
  
  constructor() { }

  ngOnInit() {
  }

}
