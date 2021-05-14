export interface QuestionInterface {
  id: number;
  title: string;
  type: string;
  groupId?: number;
  answer: number | number[] | string | string[];
  order: number;
  points: number;
}

export interface ChoicesInterface {
  id: number;
  groupId: number;
  info: string;
  childId?: number;
}

export interface ResultInterface {
  id: number;
  question: string;
  answer: number | number[] | string | string[];
  points: number;
}


export interface UserInterface {
  firstName: string,
  lastName: string,
  birthDate: string,
  email: string
}

export interface UserResultInterface {
  user: UserInterface;
  score: number;
  outOf: number;
}

