import Goal from "./Goal";
export default class meditateGoal extends Goal {
    constructor(goalAmount) {
        super();
        this.goalAmount = 0;
        // private  currentAmount: number = 0;
        this.goalType = "Minutes";
        this.goalAmount = goalAmount;
    }
    //
    // setCurrentAmount(currentAmount: number) {
    //     this.currentAmount = currentAmount;
    // }
    setGoalAmount() {
        return this.goalAmount;
    }
    // getCurrentAmount(): number{
    //     return this.currentAmount;
    // }
    getGoalType() {
        return this.goalType;
    }
}