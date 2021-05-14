export interface QuestionInterface {
  id: number;
  title: string;
  type: string;
  groupId?: number;
  // childGroupId?: number;
  answer: number | string | string[];
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
  answer: number | string | string[];
  points: number;
}
