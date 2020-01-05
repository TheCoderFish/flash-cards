export class Flash {
  constructor(
    public question?: string,
    public answer?: string,
    public show?: boolean,
    public id?: number,
    public remembered?: remembered
  ) {}
}

export type remembered = "correct" | "incorrect";

export interface MarkChange {
  id: number;
  remembered: remembered;
}
