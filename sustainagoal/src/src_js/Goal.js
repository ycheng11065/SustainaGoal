export default class Goal {
    constructor() {
        this._date = new Date();
        this._done = 0; // 0 for not done, 1 for done
        this._progress = 0;
        this._makeDate = this._date;
        this._deadline = this._date;
        this._deadline.setMonth(this._deadline.getMonth() + 1);
        this._day = this._date.getDay();
    }

    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }

    get progress() {
        return this._progress;
    }
    set progress(value) {
        this._progress = value;
    }
    set done(value) {
        this._done = value;
    }
    get done() {
        return this._done;
    }
    get date() {
        return this._date;
    }
    get makeDate() {
        return this._makeDate;
    }
    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        this._deadline = value;
    }
}