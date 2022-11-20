import cardioGoal from "./cardioGoals";
import sleepGoal from "./sleepGoal";
import waterGoal from "./waterGoal";
import meditateGoal from "./meditateGoal";
export default class SustainaGoal {
    constructor() {
        this._goals = [];
        this._waterGoal = undefined;
        this._sleepGoal = undefined;
        this._meditateGoal = undefined;
        this._cardioGoal = undefined;
        this.money = 0;
        this._goals.push(this._waterGoal);
        this._goals.push(this._sleepGoal);
        this._goals.push(this._meditateGoal);
        this._goals.push(this._cardioGoal);
    }
    addCardioGoal(goalNumber, intensity, activity) {
        this._cardioGoal = new cardioGoal(goalNumber, intensity, activity);
        return this._cardioGoal;
    }
    addSleepGoal(goalNumber) {
        this._sleepGoal = new sleepGoal(goalNumber);
        return this._sleepGoal;
    }
    addWaterGoal(goalNumber) {
        this._waterGoal = new waterGoal(goalNumber);
        return this._waterGoal;
    }
    addMeditateGoal(goalNumber) {
        this._meditateGoal = new meditateGoal(goalNumber);
        return this._meditateGoal;
    }
    checkGoals() {
        const currDate = new Date();
        for (let i = 0; i < this._goals.length; i++) {
            if (this._goals[i] === undefined) {
                continue;
            }
            else if (this._goals[i].deadline >= currDate && this._goals[i].done) {
                // success
                this._goals[i] = undefined;
            }
            else if (this._goals[i].deadline < currDate && this._goals[i].done) {
                this._goals[i].done = 0;
                this._goals[i].progress = 0;
                // reset for next day
            }
            else {
                // failed
                // Charge user 5 bucks
                this.money -= 5;
                return false;
            }
        }
        return true;
    }
    addProgress(type, amount) {
        switch (type) {
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
    get waterGoal() {
        return this._waterGoal;
    }
    get sleepGoal() {
        return this._sleepGoal;
    }
    get meditateGoal() {
        return this._meditateGoal;
    }
    get cardioGoal() {
        return this._cardioGoal;
    }
}