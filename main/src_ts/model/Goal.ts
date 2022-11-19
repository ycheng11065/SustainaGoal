
export default class Goal {
    private _date: Date = new Date();
    private readonly _makeDate: Date;
    private readonly _deadline: Date;

    constructor() {
        this._makeDate = this._date;
        this._deadline = this._date;
        this._deadline.setMonth(this._deadline.getMonth() + 1);
    }

    get date(): Date {
        return this._date;
    }

    get makeDate(): Date {
        return this._makeDate;
    }

    get deadline(): Date {
        return this._deadline;
    }
}