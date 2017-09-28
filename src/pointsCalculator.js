import ENGLISH_LEVEL from './englishLevel';
import QUALIFICATIONS from './qualifications';

// TODO: look into bug around length of years.
// should it be less than 2?
export default class {

    calculatePoints(config, date) {
        let totalPoints = 0;
        const age = this.calculateAge(config.dob, date);
        totalPoints += this.agePoints(age);
        totalPoints += this.englishLevelPoints(config.englishLevel);
        totalPoints += this.skilledEmploymentOutAustraliaPoints(config.skilledEmploymentLengthOutAustralia);
        totalPoints += this.skilledEmploymentInAustraliaPoints(config.skilledEmploymentLengthInAustralia);
        totalPoints += this.qualitificationPoints(config.qualification);
        totalPoints += this.australianStudyPoints(config.australianStudyRequirement);
        totalPoints += this.specialistEducationQualificationPoints(config.specialistEducationQualification);
        totalPoints += this.accreditedInCommunityLanguagePoints(config.accreditedInACommunityLanguage);
        totalPoints += this.studiedInRegionalAustraliaPoints(config.studiedInRegionalAustralia);
        totalPoints += this.partnerSkillQualificationPoints(config.partnerSkillQualifications);
        totalPoints += this.professionalYearInAustraliaPoints(config.professionalYearInAustralia);
        return totalPoints;
    }

    calculateAge(birthday, ageOnDate) {
        const ageDifMs = ageOnDate - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    skilledEmploymentInAustraliaPoints(years) {
        if (years < 1) return 0;
        if (years < 3) return 5;
        if (years < 5) return 10;
        if (years < 8) return 15;
        if (years < 10) return 20;
        return 0;
    }

    skilledEmploymentOutAustraliaPoints(years) {
        if (years < 3) return 0;
        if (years < 4) return 5;
        if (years < 7) return 10;
        if (years < 10) return 15;
        return 0;
    }

    australianStudyPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    specialistEducationQualificationPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    accreditedInCommunityLanguagePoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    studiedInRegionalAustraliaPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    partnerSkillQualificationPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    professionalYearInAustraliaPoints(qualifies) {
        return qualifies ? 5 : 0;
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

}
