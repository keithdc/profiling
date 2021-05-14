import {ChoicesInterface, QuestionInterface} from "../interfaces/question.interface";
import {TypesEnum} from "../enums/types.enum";

export class QuestionnaireLibrary {

  public static angular: QuestionInterface[] = [
    {
      id: 1,
      title: 'test',
      groupId: 1,
      type: TypesEnum.RADIOBOX,
      answer: 1,
      order: 1,
      points: 10,
    },
    {
      id: 2,
      title: 'test 1',
      type: TypesEnum.TEXTBOX,
      answer: 'test 1231232131',
      order: 2,
      points: 10,
    },
    {
      id: 3,
      title: 'test 2',
      type: TypesEnum.TEXTBOX,
      answer: 'test 1231232131',
      order: 3,
      points: 10,
    },
    {
      id: 4,
      title: 'test 5',
      groupId: 2,
      type: TypesEnum.RADIOBOX,
      answer: 1,
      order: 4,
      points: 10,
    },
    {
      id: 5,
      title: 'test 3',
      type: TypesEnum.TEXTBOX,
      answer: 'test 1231232131',
      order: 5,
      points: 10,
    }
  ];


  public static choices: ChoicesInterface[] = [
    {
      id: 1,
      groupId: 1,
      info: 'test',
    },
    {
      id: 2,
      groupId: 1,
      info: 'test1',
    },
    {
      id: 3,
      groupId: 1,
      info: 'test2',
    },
    {
      id: 4,
      groupId: 1,
      info: 'test3',
    },
    {
      id: 5,
      groupId: 2,
      info: 'Yes',
    },
    {
      id: 6,
      groupId: 2,
      info: 'No',
    },
    {
      id: 7,
      groupId: 2,
      info: 'Select on List',
      childId: 3
    },
    {
      id: 8,
      groupId: 3,
      info: 'hey1',
    },
    {
      id: 9,
      groupId: 3,
      info: 'hey2',
    },
    {
      id: 10,
      groupId: 3,
      info: 'hey3',
    },
    {
      id: 11,
      groupId: 3,
      info: 'hey4',
    },
    {
      id: 12,
      groupId: 3,
      info: 'hey5',
    },
    {
      id: 13,
      groupId: 3,
      info: 'hey6',
    },
    {
      id: 14,
      groupId: 3,
      info: 'hey7',
    },
    {
      id: 15,
      groupId: 3,
      info: 'hey8',
    },
  ];
}
