export class MonthLimits {
    constructor( private today = new Date() ) {}

    firstDay = this.getMonthFirstDay();
    lastDay = this.getMonthLastDay();

    private getMonthFirstDay() {
        return new Date(this.today.getFullYear(), this.today.getMonth(), 1);
    }

    private getMonthLastDay() {
        return new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0);
    }

    

}
