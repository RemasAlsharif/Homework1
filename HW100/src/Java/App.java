package Java;
import java.util.Arrays;
import java.util.List;

public class App {
    public static void main(String[] args) {

        List<Card> cards = Arrays.asList(
            new Card("A", false),
            new Card("B", true),
            new Card("C", false),
            new Card("D", true),
            new Card("E", false)
        );

        System.out.println("Before: " + cards);

        CardOrganizer sorter = new RecentMistakesFirstSorter();
        List<Card> result = sorter.orderCards(cards);

        System.out.println("After:  " + result);
    }
}
