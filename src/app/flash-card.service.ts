import { Injectable } from '@angular/core';
import { Flash } from './flash.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  private data = [
  ]

  constructor() { }

  public mockData() {
    return this.data;
  }

  public addFlashCard(flashForm) {
    const { question, answer } = flashForm;
    const flashCard: Flash = new Flash(question, answer, true, this.generateId());
    this.data.push(flashCard);
  }

  public deleteCard(flashId: number) {
    this.data = this.data.filter(flash => flash.id !== flashId);
    return this.data;
  }


  public markChange(flashId) {

  }

  public generateId():number{
    //to be replaced with a uniquedId generator
    return this.data.length + Math.floor(Math.random()*1000);
  }
}
