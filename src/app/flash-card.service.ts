import { Injectable } from '@angular/core';
import { Flash } from './flash.model';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  constructor() { }

  public mockData() {
    return ([
      new Flash('1', '1', true, 1, 'correct'),
      new Flash('2', '2', true, 2, 'incorrect'),
      new Flash('3', '3', true, 3, 'correct'),
      new Flash('4', '4', true, 4, 'incorrect')
    ])
  }
}
