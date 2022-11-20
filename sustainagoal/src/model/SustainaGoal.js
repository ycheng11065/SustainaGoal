"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cardioGoal_1 = require("./cardioGoal");
var sleepGoal_1 = require("./sleepGoal");
var waterGoal_1 = require("./waterGoal");
var meditateGoal_1 = require("./meditateGoal");
var SustainaGoal = /** @class */ (function () {
    function SustainaGoal() {
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
    SustainaGoal.prototype.addCardioGoal = function (goalNumber, intensity, activity) {
        this._cardioGoal = new cardioGoal_1.default(goalNumber, intensity, activity);
        return this._cardioGoal;
    };
    SustainaGoal.prototype.addSleepGoal = function (goalNumber) {
        this._sleepGoal = new sleepGoal_1.default(goalNumber);
        return this._sleepGoal;
    };
    SustainaGoal.prototype.addWaterGoal = function (goalNumber) {
        this._waterGoal = new waterGoal_1.default(goalNumber);
        return this._waterGoal;
    };
    SustainaGoal.prototype.addMeditateGoal = function (goalNumber) {
        this._meditateGoal = new meditateGoal_1.default(goalNumber);
        return this._meditateGoal;
    };
    SustainaGoal.prototype.checkGoals = function () {
        var currDate = new Date();
        for (var i = 0; i < this._goals.length; i++) {
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
    };
    SustainaGoal.prototype.addProgress = function (type, amount) {
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
    };
    Object.defineProperty(SustainaGoal.prototype, "waterGoal", {
        get: function () {
            return this._waterGoal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SustainaGoal.prototype, "sleepGoal", {
        get: function () {
            return this._sleepGoal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SustainaGoal.prototype, "meditateGoal", {
        get: function () {
            return this._meditateGoal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SustainaGoal.prototype, "cardioGoal", {
        get: function () {
            return this._cardioGoal;
        },
        enumerable: false,
        configurable: true
    });
    return SustainaGoal;
}());


exports.default = SustainaGoal;
