import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  onResultChanged: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
  }
}
