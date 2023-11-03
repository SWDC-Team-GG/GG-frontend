export interface ITranslateWord {
  meaning: string;
  part: string;
  plainword: string;
  translateWord: string;
  translateWordLevel: number;
}

export interface ITranslate {
  translateText: string;
  translateWords: ITranslateWord[];
}
