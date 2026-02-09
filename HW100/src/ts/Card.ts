 
export class Card {
  private id: string;
  private incorrectLastRound: boolean;

  constructor(id: string, incorrectLastRound: boolean) {
    this.id = id;
    this.incorrectLastRound = incorrectLastRound;
  }

  public wasIncorrectLastRound(): boolean {
    return this.incorrectLastRound;
  }

  public toString(): string {
    return this.id + (this.incorrectLastRound ? "(F)" : "(T)");
  }
}
