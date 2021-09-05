package SpecialTopics;

public class Member {
    // fields
    public String name;
    public int points;
    public static int id = 0;

    // constructor
    public Member(String s, int p) {
        name = s;
        points = p;
        id++;
    }
}
