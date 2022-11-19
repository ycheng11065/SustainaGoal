
export default class cardioGoal extends Goal{
    // Intensity 1 - 5
    // 1 being least intensive
    // 5 being most intensive
    private let goalCalorie: number = 0;
    private let intense: number = 0;
    private let activity: string = "";
    private let calorie_count: number = 0;

    constructor(goalAmount: number) {
       super();
       this.goalCalorie = goalAmount;
    }

    setIntense(intensity: number) {
        this.intense = intensity;
    }

    setActivity(activity: number) {
            this.activity = activity;
    }

    setCalorieCount(cc: number) {
            this.calorie_count = cc;
    }

    getGoalCalorie(): number {
        return GoalCalorie;
    }

    getActivity(): string {
        return activity;
    }

    getIntensity(): number {
        return intense;
    }

    getCurrentCalorie(): number {
        return calorie_count;
    }
}