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
var cardioGoal = /** @class */ (function (_super) {
    __extends(cardioGoal, _super);
    // private  calorie_count: number = 0;
    function cardioGoal(goalAmount, intense, activity) {
        var _this = _super.call(this) || this;
        // Intensity 1 - 5
        // 1 being least intensive
        // 5 being most intensive
        _this.goalCalorie = 0;
        _this.intense = 0;
        _this.activity = "";
        _this.intense = intense;
        _this.activity = activity;
        _this.goalCalorie = goalAmount;
        return _this;
    }
    cardioGoal.prototype.setIntense = function (intensity) {
        this.intense = intensity;
    };
    cardioGoal.prototype.setActivity = function (activity) {
        this.activity = activity;
    };
    // setCalorieCount(cc: number) {
    //     this.calorie_count = cc;
    // }
    cardioGoal.prototype.getGoalCalorie = function () {
        return this.goalCalorie;
    };
    cardioGoal.prototype.getActivity = function () {
        return this.activity;
    };
    cardioGoal.prototype.getIntensity = function () {
        return this.intense;
    };
    return cardioGoal;
}(Goal_1.default));
exports.default = cardioGoal;
