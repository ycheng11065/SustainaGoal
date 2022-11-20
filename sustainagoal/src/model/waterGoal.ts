import Goal from "./Goal";

export default class waterGoal extends Goal {
    // private  currentAmount: number = 0;
    private readonly goalAmount: number = 0;
    private  goalType: string = "Liters";

    constructor(goalAmount: number) {
        super();
        this.goalAmount = goalAmount;
    }

    getGoalType(): string {
        return this.goalType;
    }

    // getCurrentAmount(): number {
    //     return this.currentAmount;
    // }

    getGoalAmount(): number {
        return this.goalAmount;
    }

    // setCurrentAmount(currentAmount: number) {
    //     this.currentAmount = currentAmount;
    // }

}