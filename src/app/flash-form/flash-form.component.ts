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

  constructor(private fb: FormBuilder,
    private flashCardService: FlashCardService) { }

  ngOnInit() {
    this.flashForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }

  public addFlashCard() {
    this.flashCardService.addFlashCard(this.flashForm.value);
    this.flashForm.reset();
   
  }

  public isValid(controlName: string) {
    const control = this.flashForm.get(controlName) as FormControl;
    return control.hasError('required') && !control.pristine;
  }

}
