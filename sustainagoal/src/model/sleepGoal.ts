import Goal from "./Goal";

export default class sleepGoal extends Goal{
    // private  currentAmount: number = 0;
    private readonly goalAmount: number = 0;
    private  goalType: string = "Hours";

    constructor(goalAmount: number) {
        super();
        this.goalAmount = goalAmount;
    }

    // setCurrentAmount(currentAmount: number) {
    //     this.currentAmount = currentAmount;
    // }
    //
    // getCurrentAmount(): number {
    //     return this.currentAmount;
    // }

    getGoalAmount(): number {
        return this.goalAmount;
    }

    getGoalType(): string {
        return this.goalType;
    }
}