import { Component, OnInit, Input } from '@angular/core';
import { Flash } from './../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {


  @Input() flash: Flash;

  //flash = new Flash('Question 1','Answer 1',true,1,'correct');

  constructor() { }

  ngOnInit() {
  }

}
