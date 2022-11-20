"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Goal_1 = require("./Goal");
var meditateGoal = /** @class */ (function (_super) {
    __extends(meditateGoal, _super);
    function meditateGoal(goalAmount) {
        var _this = _super.call(this) || this;
        _this.goalAmount = 0;
        // private  currentAmount: number = 0;
        _this.goalType = "Minutes";
        _this.goalAmount = goalAmount;
        return _this;
    }
    //
    // setCurrentAmount(currentAmount: number) {
    //     this.currentAmount = currentAmount;
    // }
    meditateGoal.prototype.setGoalAmount = function () {
        return this.goalAmount;
    };
    // getCurrentAmount(): number{
    //     return this.currentAmount;
    // }
    meditateGoal.prototype.getGoalType = function () {
        return this.goalType;
    };
    return meditateGoal;
}(Goal_1.default));
exports.default = meditateGoal;
