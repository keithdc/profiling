import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionnaireService} from "../../services/questionnaire/questionnaire.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  ChoicesInterface,
  QuestionInterface,
  ResultInterface,
  UserResultInterface
} from "../../interfaces/question.interface";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {TypesEnum} from "../../enums/types.enum";
import * as _ from 'lodash';
import {ResultService} from "../../services/result/result.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  questions: QuestionInterface[] = [];
  choices: ChoicesInterface[] = [];
  result: ResultInterface[] = [];
  isTypeInlineRow: string[] = [TypesEnum.TEXTBOX, TypesEnum.AUTOCOMPLETE];
  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private questionnaireService: QuestionnaireService, private formBuilder: FormBuilder, private resultService: ResultService, private router: Router) {
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
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

  answer($event: number | number[] | string | string[], question: QuestionInterface): void {
    const obj: ResultInterface = {
      id: question?.id,
      question: question?.title,
      answer: $event,
      points: 0
    }
    if (Array.isArray(obj.answer)) {
      if (JSON.stringify(obj.answer.sort()) !== JSON.stringify((question.answer as number[] | string[]).sort())) {
        obj.points = 0;
      } else {
        obj.points = question?.points;
      }
    } else {
      if (obj.answer.toString().toLowerCase() !== question.answer.toString().toLowerCase()) {
        obj.points = 0;
      } else {
        obj.points = question?.points;
      }
    }

    const index = this.result?.findIndex(f => f.id === obj.id);
    if (index >= 0) {
      this.result[index] = obj;
    } else {
      this.result.push(obj);
    }
  }

  submit(): void {
    const obj: UserResultInterface = {
      user: this.formGroup.value,
      score: this.result.map(m => m.points).reduce((a, b) => a + b),
      outOf: this.questions.map(m => m.points).reduce((a, b) => a + b)
    }
    this.resultService.onResultChanged.next(obj);
    this.router.navigateByUrl(`/result`).then();
  }
}
