import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {QuestionnaireLibrary} from "../../database/fake-database";

@Injectable({
  providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService {

  createDb(): any {
    return {
      'angular-exam': QuestionnaireLibrary.angular,
      'choices': QuestionnaireLibrary.choices
    };
  }
}
