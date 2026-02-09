"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(id, incorrectLastRound) {
        this.id = id;
        this.incorrectLastRound = incorrectLastRound;
    }
    wasIncorrectLastRound() {
        return this.incorrectLastRound;
    }
    toString() {
        return this.id + (this.incorrectLastRound ? "(F)" : "(T)");
    }
}
exports.Card = Card;
//# sourceMappingURL=Card.js.map