
export default class meditateGoal extends Goal{
    private let goalAmount: number = 0;
    private let currentAmount: number = 0;
    private let goalType: string = "Minutes";

    constructor(goalAmount: number) {
        super();
        this.goalAmount = goalAmount;
    }

    setCurrentAmount(currentAmount number) {
        this.currentAmount = currentAmount;
    }

    setGoalAmount(): number{
        return goalAmount;
    }

    getCurrentAmount(): number{
        return currentAmount;
    }

    getGoalType(): string{
        return goalType;
    }
}