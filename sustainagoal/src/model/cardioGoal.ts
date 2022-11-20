import Goal from "./Goal";

export default class cardioGoal extends Goal{
    // Intensity 1 - 5
    // 1 being least intensive
    // 5 being most intensive
    private readonly goalCalorie: number = 0;
    private  intense: number = 0;
    private  activity: string = "";
    // private  calorie_count: number = 0;

    constructor(goalAmount: number, intense: number, activity: string) {
       super();
       this.intense = intense;
       this.activity = activity;
       this.goalCalorie = goalAmount;
    }

    setIntense(intensity: number) {
        this.intense = intensity;
    }

    setActivity(activity: string) {
        this.activity = activity;
    }

    // setCalorieCount(cc: number) {
    //     this.calorie_count = cc;
    // }

    getGoalCalorie(): number {
        return this.goalCalorie;
    }

    getActivity(): string {
        return this.activity;
    }

    getIntensity(): number {
        return this.intense;
    }

    // getCurrentCalorie(): number {
    //     return this.calorie_count;
    // }
}