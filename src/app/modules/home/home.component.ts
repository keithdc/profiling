import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionnaireService} from "../../services/questionnaire/questionnaire.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChoicesInterface, QuestionInterface, ResultInterface} from "../../interfaces/question.interface";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {TypesEnum} from "../../enums/types.enum";
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  questions: QuestionInterface[] = [];
  choices: ChoicesInterface[] = [];
  result: ResultInterface[] | undefined;
  TypesEnum: typeof TypesEnum = TypesEnum;
  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private questionnaireService: QuestionnaireService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {

    this.questionnaireService.onQuestionnaireChanged.asObservable().pipe(takeUntil(this.unsubscribeAll)).subscribe(res => this.questions = _.orderBy(res, 'order',
      'asc'));
    this.questionnaireService.onChoicesChanged.asObservable().pipe(takeUntil(this.unsubscribeAll)).subscribe(res => this.choices = res);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  scrollTo(elem: Element): void {
    elem?.scrollIntoView({block: 'start', behavior: 'smooth',})
  }

  answer($event: number | string, question: QuestionInterface): void {
    console.log($event, question)
  }
}
