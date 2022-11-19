package model;

public class meditateGoal extends Goal{
    private final int goalAmount;
    private int currentAmount;
    private final String goalType = "Minutes";

    private meditateGoal(int goalAmount) {
        super();
        this.goalAmount = goalAmount;
    }

    public void setCurrentAmount(int currentAmount) {
        this.currentAmount = currentAmount;
    }

    public int getGoalAmount() {
        return goalAmount;
    }

    public int getCurrentAmount() {
        return currentAmount;
    }

    public String getGoalType() {
        return goalType;
    }
}
