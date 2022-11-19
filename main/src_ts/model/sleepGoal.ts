
export default class sleepGoal extends Goal{
    private let currentAmount: number = 0;
    private let goalAmount: number = 0;
    private let goalType: string = "Hours";

    constructor(goalAmount: number) {
        super();
        this.goalAmount = goalAmount;
    }

    setCurrentAmount(currentAmount: number) {
        this.currentAmount = currentAmount;
    }

    getCurrentAmount(): number {
        return currentAmount;
    }

    getGoalAmount(): number {
        return goalAmount;
    }

    getGoalType(): string {
        return goalType;
    }
}