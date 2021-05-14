import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResultService} from "../../services/result/result.service";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {UserResultInterface} from "../../interfaces/question.interface";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  result: UserResultInterface | undefined;
  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private router: Router, private resultService: ResultService) {
  }

  ngOnInit(): void {
    this.result = this.resultService.onResultChanged.value;
    if (!this.result) {
      this.router.navigateByUrl(`/home`).then();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  home(): void {
    this.resultService.onResultChanged.next(null);
    this.router.navigateByUrl(`/home`).then();
  }
}
