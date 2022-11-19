package model;

public class waterGoal extends Goal{
    private int currentAmount;
    private final int goalAmount;
    private final String goalType = "Litres";

    public waterGoal(int goalAmount) {
        super();
        this.goalAmount = goalAmount;
        currentAmount = 0;
    }

    public String getGoalType() {
        return goalType;
    }

    public int getCurrentAmount() {
        return currentAmount;
    }

    public int getGoalAmount() {
        return goalAmount;
    }

    public void setCurrentAmount(int currentAmount) {
        this.currentAmount = currentAmount;
    }



}
