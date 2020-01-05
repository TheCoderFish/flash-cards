import { Injectable } from "@angular/core";
import { Flash, MarkChange } from "./flash.model";
import { FormGroup } from "@angular/forms";
import { Subject, Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FlashCardService {
  private flashCards: BehaviorSubject<Flash[]>;
  public flashCards$: Observable<Flash[]>;

  private editMode: Subject<Flash>;
  public editMode$: Observable<Flash>;

  private cards = [
    new Flash("bitcoin", "an online payment system that does not require an intermediary", false, this.generateId()),
    new Flash("scarce", "deficient in quantity or number compared with the demand", false, this.generateId()),
    new Flash("manifest", "reveal its presence or make an appearance", false, this.generateId())
  ];

  constructor() {
    this.flashCards = new BehaviorSubject<Flash[]>(this.cards);
    this.flashCards$ = this.flashCards.asObservable();

    this.editMode = new Subject<Flash>();
    this.editMode$ = this.editMode.asObservable();
  }

  public set flashCard(flashCards: Flash[]) {
    this.flashCards.next(flashCards);
  }

  public get flashCard() {
    return this.flashCards.getValue();
  }

  public handleToggleCard(flashId: number) {
    const flash = this.flashCard.find(flash => flash.id === flashId);
    flash.show = !flash.show;
  }

  public markChange(change: MarkChange) {
    const card = this.flashCard.find(card => card.id === change.id);
    card.remembered = change.remembered;
  }

  public addFlashCard(flashForm) {
    const { question, answer } = flashForm;
    const flashCard: Flash = new Flash(
      question,
      answer,
      false,
      this.generateId()
    );
    this.flashCard = [...this.flashCard, flashCard];
  }

  public deleteCard(flashId: number) {
    const cards = [...this.flashCard].filter(flash => flash.id !== flashId);
    this.flashCard = cards;
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
    return Math.floor(Math.random() * 1000);
  }
}
