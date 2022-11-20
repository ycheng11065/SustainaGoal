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
    }
    addCardioGoal(goalNumber, intensity, activity) {
        this._cardioGoal = new cardioGoal(goalNumber, intensity, activity);
        this._goals.push(this._cardioGoal);
        return this._cardioGoal;
    }
    addSleepGoal(goalNumber) {
        this._sleepGoal = new sleepGoal(goalNumber);
        this._goals.push(this._sleepGoal);
        return this._sleepGoal;
    }
    addWaterGoal(goalNumber) {
        this._waterGoal = new waterGoal(goalNumber);
        this._goals.push(this._waterGoal);
        return this._waterGoal;
    }
    addMeditateGoal(goalNumber) {
        this._meditateGoal = new meditateGoal(goalNumber);
        this._goals.push(this._meditateGoal);
        return this._meditateGoal;
    }

    checkGoals() {
        return this.checkGoal(this._waterGoal) && this.checkGoal(this._meditateGoal)
            && this.checkGoal(this._cardioGoal) && this.checkGoal(this._sleepGoal);
    }

    checkGoal(goal) {
        const currDate = new Date();
        // console.log(currDate.getDate());
        if (goal === undefined) {
            // console.log("option 1");
            return true;
        }  else if (currDate.getDate() !== goal.day && goal.done === 1) {
            // reset for next day
            console.log("option 2");
            goal.done = 0;
            goal.progress = 0;
            goal.day = currDate.getDate();
        } else if (goal.deadline < currDate && goal.done === 1) {
            console.log("option 3");
            goal = undefined;
        } else if (currDate.getDate() <= goal.day) {
            console.log("option 4");
            return true;
        } else {
            console.log("option 5");
            this.money -= 5;
            return false;
        }

        return true;
    }

    addProgress(type, amount) {
        switch (type) {
            case "cardio":
                this._cardioGoal._progress += amount;
                if (this._cardioGoal._progress >= this._cardioGoal.goalAmount) {
                    this._cardioGoal._done = 1;
                }
                return true;
            case "sleep":
                this._sleepGoal._progress += amount;
                if (this._sleepGoal._progress >= this._sleepGoal.goalAmount) {
                    this._sleepGoal._done = 1;
                }
                return true;
            case "meditate":
                this._meditateGoal._progress += amount;
                if (this._meditateGoal._progress >= this._meditateGoal.goalAmount) {
                    this._meditateGoal._done = 1;
                }
                return true;
            case "water":
                this._waterGoal._progress += amount;
                if (this._waterGoal._progress >= this._waterGoal.goalAmount) {
                    this._waterGoal._done = 1;
                }
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