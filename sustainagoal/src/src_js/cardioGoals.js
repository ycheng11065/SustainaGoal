import Goal from "./Goal";
export default class cardioGoal extends Goal {
    // private  calorie_count: number = 0;
    constructor(goalAmount, intense, activity) {
        super();
        // Intensity 1 - 5
        // 1 being least intensive
        // 5 being most intensive
        this.goalCalorie = 0;
        this.intense = 0;
        this.activity = "";
        this.intense = intense;
        this.activity = activity;
        this.goalCalorie = goalAmount;
    }
    setIntense(intensity) {
        this.intense = intensity;
    }
    setActivity(activity) {
        this.activity = activity;
    }
    // setCalorieCount(cc: number) {
    //     this.calorie_count = cc;
    // }
    getGoalCalorie() {
        return this.goalCalorie;
    }
    getActivity() {
        return this.activity;
    }
    getIntensity() {
        return this.intense;
    }
}