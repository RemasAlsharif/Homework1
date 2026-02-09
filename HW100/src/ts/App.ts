 import { Card } from "./Card";
import { CardOrganizer } from "./CardOrganizer";
import { newRecentMistakesFirstSorter } from "./newRecentMistakesFirstSorter";


const cards: Card[] = [
  new Card("A", false),
  new Card("B", true),
  new Card("C", false),
  new Card("D", true),
  new Card("E", false),
];

console.log(
  "Before:",
  `[${cards.map(c => c.toString()).join(", ")}]`
);
const sorter: CardOrganizer = new newRecentMistakesFirstSorter();

const result: Card[] = sorter.orderCards(cards);

console.log(
  "After:",
  `[${result.map(c => c.toString()).join(", ")}]`
);
