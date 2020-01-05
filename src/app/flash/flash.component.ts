import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flash } from './../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent implements OnInit {

  @Input() public flash: Flash;

  @Output() public toggleCard: EventEmitter<number>;

  constructor() {
    this.toggleCard = new EventEmitter<number>();
  }

  ngOnInit() {
  }

}
