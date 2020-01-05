import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flash, remembered, MarkChange } from './../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent {

  @Input() public flash: Flash;
  @Output() public toggleCard: EventEmitter<number>;
  @Output() public editCard: EventEmitter<number>;
  @Output() public deleteCard: EventEmitter<number>;
  @Output() public markChange: EventEmitter<MarkChange>;

  constructor() {
    this.toggleCard = new EventEmitter<number>();
    this.editCard = new EventEmitter<number>();
    this.deleteCard = new EventEmitter<number>();
    this.markChange = new EventEmitter<MarkChange>();
  }

  public markCorrect(flashId: number) {
    this.markChange.emit({
      id: flashId,
      remembered: 'correct'
    });
  }

  public markInCorrect(flashId: number) {
    this.markChange.emit({
      id: flashId,
      remembered: 'incorrect'
    });
  }

}
