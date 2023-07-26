import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  test : Date = new Date();

  @Input() color: any;
  @Input() icon: string;
  @Input() url: string;
  
  constructor() { }

  ngOnInit() {
  }

}
