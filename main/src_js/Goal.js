export default class Goal {
    constructor() {
        this._date = new Date();
        this._done = 0; // 0 for not done, 1 for done
        this._progress = 0;
        this._makeDate = this._date;
        this._deadline = this._date.setMonth(this._date.getMonth() + 1);
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
}