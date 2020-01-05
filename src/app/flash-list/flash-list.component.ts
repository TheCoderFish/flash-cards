import { Component, OnInit, Input } from '@angular/core';
import { Flash, MarkChange } from '../flash.model';
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

  public handleToggleCard(flashId: number) {
    const flash = this.cards.find(flash => flash.id === flashId);
    flash.show = !flash.show;
  }

  public editCard(flashId: number) {

  }

  public deleteCard(flashId: number) {
    this.cards = this.flashCardService.deleteCard(flashId);

  }
  public markChange(change: MarkChange) {
    const card = this.cards.find(card=>card.id === change.id);
    card.remembered = change.remembered;

  }




  trackByFlashId(index, flash) {
    return flash.id;
  }

}
