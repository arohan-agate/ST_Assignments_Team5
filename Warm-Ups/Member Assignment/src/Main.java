package SpecialTopics;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Member> list = new ArrayList<>();
        list.add(new Member("Arohan", 100));
        list.add(new Member("Ethan", 500));
        list.add(new Member("Hammad", 200));
        list.add(new Member("Ike", 50));

        Team t = new Team(list);
        System.out.println(t.getMostPoints());

    }
}
