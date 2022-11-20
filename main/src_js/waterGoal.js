import Goal from "./Goal";
export default class waterGoal extends Goal {
    constructor(goalAmount) {
        super();
        // private  currentAmount: number = 0;
        this.goalType = "Liters";
        this.goalAmount = goalAmount;
    }
    getGoalType() {
        return this.goalType;
    }
    getGoalAmount() {
        return this.goalAmount;
    }
}
