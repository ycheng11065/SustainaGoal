import Goal from "./Goal";
import cardioGoal from "./cardioGoal";
import sleepGoal from "./sleepGoal";
import waterGoal from "./waterGoal";
import meditateGoal from "./meditateGoal";

export default class SustainaGoal {
    private _goals: Goal[] = [];
    private waterGoal: waterGoal = undefined;
    private sleepGoal: sleepGoal = undefined;
    private meditateGoal: meditateGoal = undefined;
    private cardioGoal: cardioGoal = undefined;
    private money: number = 0;

    constructor() {
        this._goals.push(this.waterGoal);
        this._goals.push(this.sleepGoal);
        this._goals.push(this.meditateGoal);
        this._goals.push(this.cardioGoal);
    }

    public addCardioGoal(goalNumber: number, intensity: number, activity: string ): Goal {
        this.cardioGoal = new cardioGoal(goalNumber, intensity,activity);
        return this.cardioGoal;
    }
    public addSleepGoal(goalNumber: number): Goal {
        this.sleepGoal = new sleepGoal(goalNumber);
        return this.sleepGoal;
    }
    public addWaterGoal(goalNumber: number): Goal {
        this.waterGoal = new waterGoal(goalNumber);
        return this.waterGoal;

    }
    public addMeditateGoal(goalNumber: number): Goal {
        this.meditateGoal = new meditateGoal(goalNumber);
        return this.meditateGoal;
    }


    public checkGoals(): boolean {
        const currDate = new Date();
        for (let i = 0; i < this._goals.length; i++) {
            if (this._goals[i] === undefined) {
                continue;
            } else if (this._goals[i].deadline >= currDate && this._goals[i].done) {
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

    public addProgress(type: string, amount: number): boolean {
        switch(type) {
            case "cardio":
                this.cardioGoal.progress += amount;
                return true;
            case "sleep":
                this.sleepGoal.progress += amount;
                return true;
            case "meditate":
                this.meditateGoal.progress += amount;
                return true;
            case "water":
                this.waterGoal.progress += amount;
                return true;
            default:
                return false;
        }

        return true;
    }

    get goals(): Goal[] {
        return this._goals;
    }
}