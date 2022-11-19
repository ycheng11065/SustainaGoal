
export default class waterGoal extends Goal {
    private let currentAmount: number = 0;
    private let goalAmount: number = 0;
    private let goalType: string = "Liters";

    constructor(goalAmount: number) {
        super();
        this.goalAmount = goalAmount;
    }

    getGoalType(): string {
        return goalType;
    }

    getCurrentAmount(): number {
        return currentAmount;
    }

    getGoalAmount(): number {
        return goalAmount;
    }

    setCurrentAmount(currentAmount: number) {
        this.currentAmount = currentAmount;
    }

}