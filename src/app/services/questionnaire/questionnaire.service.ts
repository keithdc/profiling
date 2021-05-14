import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService implements Resolve<any> {

  onQuestionnaireChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onChoicesChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<void> | any {
    return new Promise<void>((resolve, reject) => {

      Promise.all([
        this.getQuestionnaire(),
        this.getChoices(),
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  private getQuestionnaire(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('api/angular-exam')
        .subscribe((response: any) => {
          this.onQuestionnaireChanged.next(response);
          resolve(response);
        }, reject);
    });
  }

  private getChoices(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('api/choices')
        .subscribe((response: any) => {
          this.onChoicesChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
}
