"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Goal = /** @class */ (function () {
    function Goal() {
        this._date = new Date();
        this._done = 0; // 0 for not done, 1 for done
        this._progress = 0;
        this._makeDate = this._date;
        this._deadline = this._date;
        this._deadline.setMonth(this._deadline.getMonth() + 1);
    }
    Object.defineProperty(Goal.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (value) {
            this._progress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goal.prototype, "done", {
        get: function () {
            return this._done;
        },
        set: function (value) {
            this._done = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goal.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goal.prototype, "makeDate", {
        get: function () {
            return this._makeDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goal.prototype, "deadline", {
        get: function () {
            return this._deadline;
        },
        enumerable: false,
        configurable: true
    });
    return Goal;
}());
exports.default = Goal;
