import Goal from "./Goal";

export default class SustainaGoal {
    private _goals: Goal[] = [];
    private money: number = 0;

    constructor() {
        //
    }

    public addGoal(type: string, goalNumber: number ): Goal {
        let goal: Goal;
        switch(type) {
            case "cardio":

            case "sleep":

            case "water":

            case "meditate":

        }

        return goal;
    }

    public checkGoals(): boolean {
        const currDate = new Date();
        for (let i = 0; i < this._goals.length; i++) {
            if (this._goals[i].deadline >= currDate && this._goals[i].done) {
                // success
                delete this._goals[i];
            } else if (this._goals[i].deadline < currDate && this._goals[i].done) {
                this._goals[i].done = 0;
                this._goals[i].progress = 0;
                // reset for next day
            } else {
                // failed
                // Charge user 5 bucks
                this.money -= 5;
                return false;
            }
        }
        return true;
    }

    public addProgress(goal: Goal, amount: number): boolean {
        goal.progress += amount;
        return true;
    }

    get goals(): Goal[] {
        return this._goals;
    }

    set goals(value: Goal[]) {
        this._goals = value;
    }
}