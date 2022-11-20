import Goal from "./Goal";
import cardioGoal from "./cardioGoal";
import sleepGoal from "./sleepGoal";
import waterGoal from "./waterGoal";
import meditateGoal from "./meditateGoal";

export default class SustainaGoal {
    private _goals: Goal[] = [];
    private _waterGoal: waterGoal = undefined;
    private _sleepGoal: sleepGoal = undefined;
    private _meditateGoal: meditateGoal = undefined;
    private _cardioGoal: cardioGoal = undefined;
    private money: number = 0;

    constructor() {
        this._goals.push(this._waterGoal);
        this._goals.push(this._sleepGoal);
        this._goals.push(this._meditateGoal);
        this._goals.push(this._cardioGoal);
    }

    public addCardioGoal(goalNumber: number, intensity: number, activity: string ): Goal {
        this._cardioGoal = new cardioGoal(goalNumber, intensity,activity);
        return this._cardioGoal;
    }
    public addSleepGoal(goalNumber: number): Goal {
        this._sleepGoal = new sleepGoal(goalNumber);
        return this._sleepGoal;
    }
    public addWaterGoal(goalNumber: number): Goal {
        this._waterGoal = new waterGoal(goalNumber);
        return this._waterGoal;

    }

    public addMeditateGoal(goalNumber: number): Goal {
        this._meditateGoal = new meditateGoal(goalNumber);
        return this._meditateGoal;
    }


    public checkGoals(): boolean {
        const currDate = new Date();
        for (let i = 0; i < this._goals.length; i++) {
            if (this._goals[i] === undefined) {
                continue;
            } else if (this._goals[i].deadline >= currDate && this._goals[i].done) {
                // success
                this._goals[i] = undefined;
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
                this._cardioGoal.progress += amount;
                return true;
            case "sleep":
                this._sleepGoal.progress += amount;
                return true;
            case "meditate":
                this._meditateGoal.progress += amount;
                return true;
            case "water":
                this._waterGoal.progress += amount;
                return true;
            default:
                return false;
        }
    }


    get waterGoal(): waterGoal {
        return this._waterGoal;
    }

    get sleepGoal(): sleepGoal {
        return this._sleepGoal;
    }

    get meditateGoal(): meditateGoal {
        return this._meditateGoal;
    }

    get cardioGoal(): cardioGoal {
        return this._cardioGoal;
    }
}