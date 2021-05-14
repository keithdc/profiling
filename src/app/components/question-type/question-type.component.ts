import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {TypesEnum} from "../../enums/types.enum";
import {ChoicesInterface, QuestionInterface} from "../../interfaces/question.interface";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionTypeComponent implements OnInit {
  @Input() type: string | undefined;
  @Input() question: QuestionInterface | undefined;
  @Input() choices: ChoicesInterface[] = [];
  @Output() answer: EventEmitter<number | number[] | string | string[]> = new EventEmitter<number | number[] | string | string[]>();
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger: MatAutocompleteTrigger | undefined;
  getChoices: ChoicesInterface[] = [];
  getChildChoices: ChoicesInterface[] = [];
  TypesEnum: typeof TypesEnum = TypesEnum;
  data: number | string | undefined;
  childData: number | string | undefined;
  checkedData: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.type === TypesEnum.AUTOCOMPLETE) {
      this.getChildChoices = this.choices?.filter(f => f.groupId === this.question?.groupId);
    } else {
      this.getChoices = this.choices?.filter(f => f.groupId === this.question?.groupId);
    }
  }

  checkIfHasChild(choices: ChoicesInterface): void {
    if (choices?.childId) {
      this.getChildChoices = this.choices?.filter(f => f.groupId === choices?.childId);
      setTimeout(() => {
        (this.autocompleteTrigger as MatAutocompleteTrigger).openPanel();
      })
    } else {
      this.childData = undefined;
      this.getChildChoices = [];
    }
  }

  checked($event: MatCheckboxChange, data: ChoicesInterface): void {
    if ($event.checked) {
      this.checkedData = [...(this.checkedData || []), data?.id]
    } else {
      this.checkedData?.splice(this.checkedData.indexOf(data?.id), 1);
    }
    this.answer.emit(this.checkedData)
  }

}
