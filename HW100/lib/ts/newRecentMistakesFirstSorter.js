"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRecentMistakesFirstSorter = void 0;
class newRecentMistakesFirstSorter {
    constructor() { }
    orderCards(cards) {
        const incorrect = [];
        const correct = [];
        for (const card of cards) {
            if (card.wasIncorrectLastRound()) {
                incorrect.push(card);
            }
            else {
                correct.push(card);
            }
        }
        return [...incorrect, ...correct];
    }
}
exports.newRecentMistakesFirstSorter = newRecentMistakesFirstSorter;
//# sourceMappingURL=newRecentMistakesFirstSorter.js.map