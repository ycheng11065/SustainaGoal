package model;

public class sleepGoal extends Goal{

    private int currentAmount;
    private final int goalAmount;
    private final String goalType = "Hours";

    public sleepGoal(int goalAmount) {
        super();
        currentAmount = 0;
        this.goalAmount = goalAmount;
    }

    public void setCurrentAmount(int currentAmount) {
        this.currentAmount = currentAmount;
    }

    public int getCurrentAmount() {
        return currentAmount;
    }

    public int getGoalAmount() {
        return goalAmount;
    }

    public String getGoalType() {
        return goalType;
    }
}
