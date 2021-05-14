import {ChoicesInterface, QuestionInterface} from "../interfaces/question.interface";
import {TypesEnum} from "../enums/types.enum";

export class QuestionnaireLibrary {

  public static angular: QuestionInterface[] = [
    {
      id: 1,
      title: 'When did angular 4 released?',
      groupId: 2,
      type: TypesEnum.RADIOBOX,
      answer: 8,
      order: 2,
      points: 10,
    },
    {
      id: 2,
      title: 'What are common Lifecycle hooks in Angular? in sequence',
      groupId: 1,
      type: TypesEnum.RADIOBOX,
      answer: 2,
      order: 1,
      points: 10,
    },
    {
      id: 3,
      title: 'In Angular there is a special syntax that uses template expressions within double curly {{ }} braces for displaying the component data. This is called?',
      type: TypesEnum.TEXTBOX,
      answer: 'interpolation',
      order: 3,
      points: 10,
    },
    {
      id: 4,
      title: 'Can we use a custom directive on components?',
      groupId: 3,
      type: TypesEnum.RADIOBOX,
      answer: 9,
      order: 4,
      points: 10,
    },
    {
      id: 5,
      title: 'What is AOT?',
      type: TypesEnum.TEXTBOX,
      answer: 'Ahead-Of-Time',
      order: 5,
      points: 10,
    },
    {
      id: 6,
      title: 'What are common pipe filters in Angular, Please select that does not belong.',
      type: TypesEnum.AUTOCOMPLETE,
      groupId: 5,
      answer: 19,
      order: 6,
      points: 10,
    },
    {
      id: 7,
      title: 'Is a stream of events or data',
      type: TypesEnum.TEXTBOX,
      answer: 'Observable',
      order: 7,
      points: 10,
    },
    {
      id: 8,
      title: 'What are data binding? (choose 3 answer)',
      type: TypesEnum.CHECKBOX,
      groupId: 6,
      answer: [22, 24, 27],
      order: 8,
      points: 10,
    },
    {
      id: 9,
      title: 'Are to alter the behavior/appearance of an element',
      type: TypesEnum.TEXTBOX,
      answer: 'Directives',
      order: 9,
      points: 5,
    },
    {
      id: 10,
      title: 'Where can we unsubscribe the Observable ',
      type: TypesEnum.TEXTBOX,
      answer: 'ngOnDestroy',
      order: 10,
      points: 5,
    },
    {
      id: 11,
      title: 'Importing the _________________ into your application enables Angular\'s animation system',
      groupId: 7,
      type: TypesEnum.RADIOBOX,
      answer: 33,
      order: 11,
      points: 10,
    },
  ];


  public static choices: ChoicesInterface[] = [
    {
      id: 1,
      groupId: 1,
      info: 'ngOnInit(), ngOnChanges(), ngAfterViewInit(), ngOnDestroy()',
    },
    {
      id: 2,
      groupId: 1,
      info: 'ngOnChanges(), ngOnInit(), ngAfterViewInit(), ngOnDestroy()',
    },
    {
      id: 3,
      groupId: 1,
      info: 'ngOnChanges(), ngOnInit(), ngOnDestroy(), ngAfterViewInit()',
    },
    {
      id: 4,
      groupId: 1,
      info: 'ngOnInit(), ngAfterViewInit(), ngOnChanges(), ngOnDestroy()',
    },
    {
      id: 5,
      groupId: 2,
      info: 'October 2010',
    },
    {
      id: 6,
      groupId: 2,
      info: 'September 2016',
    },
    {
      id: 7,
      groupId: 2,
      info: 'February 2017',
    },
    {
      id: 8,
      groupId: 2,
      info: 'March 2017',
    },
    {
      id: 9,
      groupId: 3,
      info: 'Yes',
    },
    {
      id: 10,
      groupId: 3,
      info: 'No',
    },
    {
      id: 11,
      groupId: 3,
      childId: 4,
      info: 'Please select to specify',
    },
    {
      id: 12,
      groupId: 4,
      info: 'HTML',
    },
    {
      id: 13,
      groupId: 4,
      info: 'CSS',
    },
    {
      id: 14,
      groupId: 4,
      info: 'Typescript file',
    },
    {
      id: 15,
      groupId: 5,
      info: 'Pipe',
    },

    {
      id: 16,
      groupId: 5,
      info: 'currency',
    },
    {
      id: 17,
      groupId: 5,
      info: 'date',
    },
    {
      id: 18,
      groupId: 5,
      info: 'number',
    },
    {
      id: 19,
      groupId: 5,
      info: 'limiter',
    },
    {
      id: 20,
      groupId: 5,
      info: 'orderBy',
    },
    {
      id: 21,
      groupId: 5,
      info: 'json',
    },
    {
      id: 22,
      groupId: 6,
      info: 'String Interpolation',
    },
    {
      id: 23,
      groupId: 6,
      info: 'Binding Syntax',
    },
    {
      id: 24,
      groupId: 6,
      info: 'Property Binding',
    },
    {
      id: 25,
      groupId: 6,
      info: 'HTML Binding',
    },
    {
      id: 26,
      groupId: 6,
      info: 'One-Way Data Binding',
    },
    {
      id: 27,
      groupId: 6,
      info: 'Two-Way Data Binding',
    },
    {
      id: 28,
      groupId: 7,
      info: 'CommonModule',
    },
    {
      id: 29,
      groupId: 7,
      info: 'MatButtonModule',
    },
    {
      id: 30,
      groupId: 7,
      childId: 8,
      info: 'Please select to specify',
    },
    {
      id: 31,
      groupId: 8,
      info: 'RouterModule',
    },
    {
      id: 32,
      groupId: 8,
      info: 'BrowserModule',
    },
    {
      id: 33,
      groupId: 8,
      info: 'BrowserAnimationsModule',
    },
    {
      id: 34,
      groupId: 8,
      info: 'MatSliderModule',
    },
  ];
}
