
import { Card } from "./Card";

export interface CardOrganizer {
  orderCards(cards: Card[]): Card[];
}
