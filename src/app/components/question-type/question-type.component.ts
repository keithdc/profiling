import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TypesEnum} from "../../enums/types.enum";
import {ChoicesInterface, QuestionInterface} from "../../interfaces/question.interface";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";

@Component({
  selector: 'app-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.css']
})
export class QuestionTypeComponent implements OnInit {
  @Input() type: string | undefined;
  @Input() question: QuestionInterface | undefined;
  @Input() choices: ChoicesInterface[] = [];
  @Output() answer: EventEmitter<number | string> = new EventEmitter<number | string>();
  // @ViewChild(MatAutocompleteTrigger) autocompleteTrigger: MatAutocompleteTrigger;
  getChoices: ChoicesInterface[] = [];
  getChildChoices: ChoicesInterface[] = [];
  TypesEnum: typeof TypesEnum = TypesEnum;
  data: number | string | undefined;
  childData: number | string | undefined;


  constructor() {
  }

  ngOnInit(): void {
    this.getChoices = this.choices?.filter(f => f.groupId === this.question?.groupId);
  }

  checkIfHasChild(choices: ChoicesInterface): void {
    if (choices?.childId) {
      this.getChildChoices = this.choices?.filter(f => f.groupId === choices?.childId);
      // this.autocompleteTrigger.openPanel();
    } else {
      this.getChildChoices = [];
    }
  }

}
