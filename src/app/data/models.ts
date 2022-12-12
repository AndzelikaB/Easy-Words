export interface WordType {
  word: string;
  type: Type;
  correct?: boolean;
}

export enum Type {
  NOUN,
  VERB,
}
