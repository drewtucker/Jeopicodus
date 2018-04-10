export class Question {
  private id: number;
  private value: number;
  constructor(public category: string, public question: string, public answer: string, public choices: string[]){}
}
