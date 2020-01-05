import { Injectable } from '@angular/core';
import { Flash } from './flash.model';
import { FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  private editMode: Subject<Flash>;
  public editMode$: Observable<Flash>;

  private cards = [
  ]

  constructor() {
    this.editMode = new Subject<Flash>();
    this.editMode$ = this.editMode.asObservable();
  }

  public getCards() {
    return this.cards;
  }

  public addFlashCard(flashForm) {
    const { question, answer } = flashForm;
    const flashCard: Flash = new Flash(question, answer, true, this.generateId());
    this.cards.push(flashCard);
  }

  public deleteCard(flashId: number) {
    this.cards = this.cards.filter(flash => flash.id !== flashId);
    return this.cards;
  }


  public editCard(flashId: number) {
    const card = this.cards.find(flash => flash.id === flashId);
    this.editMode.next(card);
  }

  public updateCard(flashCard: Flash) {
    let card: Flash = this.cards.find(flash => flash.id === flashCard.id);
    card.question = flashCard.question;
    card.answer = flashCard.answer;
  }
  private generateId(): number {
    //to be replaced with a uniquedId generator
    return this.cards.length + Math.floor(Math.random() * 1000);
  }
}
