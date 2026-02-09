package Java;
 public class Card {

    private String id;
    private boolean incorrectLastRound;

    public Card(String id, boolean incorrectLastRound) {
        this.id = id;
        this.incorrectLastRound = incorrectLastRound;
    }

    public boolean wasIncorrectLastRound() {
        return incorrectLastRound;
    }

    @Override
    public String toString() {
        return id + (incorrectLastRound ? "(X)" : "(/)");
    }
}
