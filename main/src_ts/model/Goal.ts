
export default class Goal {
    private _date: Date = new Date();
    private readonly _makeDate: Date;
    private readonly _deadline: Date;
    private _done: number = 0; // 0 for not done, 1 for done
    private _progress: number = 0;

    constructor() {
        this._makeDate = this._date;
        this._deadline = this._date;
        this._deadline.setMonth(this._deadline.getMonth() + 1);
    }


    get progress(): number {
        return this._progress;
    }

    set progress(value: number) {
        this._progress = value;
    }

    set done(value: number) {
        this._done = value;
    }

    get done(): number {
        return this._done;
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