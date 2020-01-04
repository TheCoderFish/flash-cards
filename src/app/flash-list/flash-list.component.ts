import { Component, OnInit, Input } from '@angular/core';
import { Flash } from '../flash.model';
import { FlashCardService } from '../flash-card.service';

@Component({
  selector: 'app-flash-list',
  templateUrl: './flash-list.component.html',
  styleUrls: ['./flash-list.component.scss']
})
export class FlashListComponent implements OnInit {

  @Input() cards: Flash[];

  constructor(private flashCardService: FlashCardService) {
  }

  ngOnInit() {
    this.cards = this.flashCardService.mockData();
  }


  trackByFlashId(index, flash) {
    return flash.id;
  }

}
