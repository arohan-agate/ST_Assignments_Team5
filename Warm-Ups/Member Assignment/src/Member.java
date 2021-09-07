public class Member {
    // fields
    protected String name;
    protected int points;
    protected int id;
    protected static int id_count = 0;

    // constructor
    public Member(String s, int p) {
        name = s;
        points = p;
        id = id_count;
        id_count++;
    }
}
