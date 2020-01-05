import { Component, OnInit, Input } from "@angular/core";
import { Flash, MarkChange } from "../flash.model";
import { FlashCardService } from "../flash-card.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-flash-list",
  templateUrl: "./flash-list.component.html",
  styleUrls: ["./flash-list.component.scss"]
})
export class FlashListComponent {
  
  @Input() cards: Observable<Flash[]> = this.flashCardService.flashCards$;

  constructor(private flashCardService: FlashCardService) {}
}
