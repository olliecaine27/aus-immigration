export default class {

    constructor(config) {
        this.config = config;
    }

    calculateAge(birthday, ageOnDate) {
        const ageDifMs = ageOnDate - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    pointsOnDate(date) {
        const age = this.calculateAge(this.config.dob, date);
        if (age < 18) return 0;
        if (age < 25) return 25;
        if (age < 33) return 30;
        if (age < 40) return 25;
        if (age < 45) return 15;
        return 0;
    }

}
