import java.util.ArrayList;

public class Team {
    // fields
    protected ArrayList<Member> team;

    // constructor
    public Team(ArrayList<Member> t) {
        team = t;
    }

    // this method will return the name of the Member with the most points
    public String getMostPoints() {
        int mostPoints = Integer.MIN_VALUE;
        Member bestMember = null;
        for (Member m : team) {
            if (m.points > mostPoints) {
                mostPoints = m.points;
                bestMember = m;
            }
        }
        return bestMember.name;
    }
}
