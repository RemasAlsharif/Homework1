"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("./Card");
const newRecentMistakesFirstSorter_1 = require("./newRecentMistakesFirstSorter");
const cards = [
    new Card_1.Card("A", false),
    new Card_1.Card("B", true),
    new Card_1.Card("C", false),
    new Card_1.Card("D", true),
    new Card_1.Card("E", false),
];
console.log("Before:", `[${cards.map(c => c.toString()).join(", ")}]`);
const sorter = new newRecentMistakesFirstSorter_1.newRecentMistakesFirstSorter();
const result = sorter.orderCards(cards);
console.log("After:", `[${result.map(c => c.toString()).join(", ")}]`);
//# sourceMappingURL=App.js.map