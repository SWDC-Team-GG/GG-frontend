export interface ITranslateWord {
  meaning: string;
  part: string;
  plainWord: string;
  translateWord: string;
  translateWordLevel: number;
}

export interface ITranslate {
  translateText: string;
  translateWords: ITranslateWord[];
}
