import Goal from "./Goal";

export default class meditateGoal extends Goal{
    private readonly goalAmount: number = 0;
    // private  currentAmount: number = 0;
    private  goalType: string = "Minutes";

    constructor(goalAmount: number) {
        super();
        this.goalAmount = goalAmount;
    }
    //
    // setCurrentAmount(currentAmount: number) {
    //     this.currentAmount = currentAmount;
    // }

    setGoalAmount(): number{
        return this.goalAmount;
    }

    // getCurrentAmount(): number{
    //     return this.currentAmount;
    // }

    getGoalType(): string{
        return this.goalType;
    }
}