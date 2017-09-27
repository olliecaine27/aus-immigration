import ENGLISH_LEVEL from './englishLevel';
import QUALIFICATIONS from './qualifications';

export default class {

    constructor(config) {
        this.config = config;
    }

    calculateAge(birthday, ageOnDate) {
        const ageDifMs = ageOnDate - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    skilledEmploymentInAustralia(years) {
        if (years < 1) return 0;
        if (years < 2) return 5;
        if (years < 4) return 10;
        if (years < 7) return 15;
        if (years < 10) return 20;
        return 0;
    }

    qualitificationPoints(qualificationLevel) {
        switch (qualificationLevel) {
        case QUALIFICATIONS.DoctorateDegree:
            return 20;
        case QUALIFICATIONS.BachelorDegree:
            return 15;
        case QUALIFICATIONS.DiplomaOrTradeQualification:
            return 10;
        case QUALIFICATIONS.NominatedSkilledOccupation:
            return 10;
        default:
            return 0;
        }
    }

    agePoints(age) {
        if (age < 18) return 0;
        if (age < 25) return 25;
        if (age < 33) return 30;
        if (age < 40) return 25;
        if (age < 45) return 15;
        return 0;
    }

    englishLevelPoints(englishLevel) {
        switch (englishLevel) {
        case ENGLISH_LEVEL.Competent:
            return 0;
        case ENGLISH_LEVEL.Proficient:
            return 10;
        case ENGLISH_LEVEL.Superior:
            return 20;
        default:
            return 0;
        }
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
