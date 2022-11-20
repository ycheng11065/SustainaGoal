import Goal from "./Goal";
export default class sleepGoal extends Goal {
    constructor(goalAmount) {
        super();
        // private  currentAmount: number = 0;
        this.goalAmount = 0;
        this.goalType = "Hours";
        this.goalAmount = goalAmount;
    }
    // setCurrentAmount(currentAmount: number) {
    //     this.currentAmount = currentAmount;
    // }
    //
    // getCurrentAmount(): number {
    //     return this.currentAmount;
    // }
    getGoalAmount() {
        return this.goalAmount;
    }
    getGoalType() {
        return this.goalType;
    }
}