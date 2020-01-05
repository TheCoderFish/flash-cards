import { Injectable } from '@angular/core';
import { Flash } from './flash.model';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  private data = [
    new Flash('1', '1', true, 1),
    new Flash('2', '2', true, 2),
    new Flash('3', '3', true, 3),
    new Flash('4', '4', true, 4)
  ]

  constructor() { }

  public mockData() {
    return this.data;
  }

  public deleteCard(flashId: number) {
    this.data = this.data.filter(flash => flash.id !== flashId);
    return this.data;
  }


  public markChange(flashId) {

  }
}
