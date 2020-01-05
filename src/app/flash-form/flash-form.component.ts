import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FlashCardService } from '../flash-card.service';
import { Flash } from '../flash.model';

@Component({
  selector: 'app-flash-form',
  templateUrl: './flash-form.component.html',
  styleUrls: ['./flash-form.component.scss']
})
export class FlashFormComponent implements OnInit {

  public flashForm: FormGroup;
  private editMode: boolean = false;
  private editCard: Flash;

  constructor(private fb: FormBuilder,
    private flashCardService: FlashCardService) { }

  ngOnInit() {
    this.flashForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });

    this.flashCardService.editMode$.subscribe((card: Flash) => {
      this.editCard = {...card};
      this.editMode = true;
      this.flashForm.patchValue(card);
    });
  }

  public addFlashCard() {
    this.flashCardService.addFlashCard(this.flashForm.value);
    this.flashForm.reset();
  }

  public updateFlashCard(){
    const {question, answer} = this.flashForm.value;
    this.editCard.question = question;
    this.editCard.answer = answer;
    this.flashCardService.updateCard(this.editCard);
    this.editMode = false;
    this.flashForm.reset();
  }

  public isValid(controlName: string) {
    const control = this.flashForm.get(controlName) as FormControl;
    return control.hasError('required') && !control.pristine;
  }

}
