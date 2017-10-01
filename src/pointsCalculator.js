import ENGLISH_LEVEL from './englishLevel';
import QUALIFICATIONS from './qualifications';

export default class {

    calculatePoints(config, date = new Date()) {
        const self = this;
        return {
            calculationDate: date,
            ageOnDate: 22,
            totalPoints() {
                let totalPoints = 0;

                if (config.dob) { totalPoints += self.agePoints(self.calculateAge(config.dob, date)); }

                if (config.englishLevel) { totalPoints += self.englishLevelPoints(config.englishLevel); }

                let skillPoints = 0;
                if (config.skilledEmploymentLengthOutAustralia) {
                    skillPoints += self.skilledEmploymentOutAustraliaPoints(config.skilledEmploymentLengthOutAustralia);
                }
                if (config.skilledEmploymentLengthInAustralia) {
                    skillPoints += self.skilledEmploymentInAustraliaPoints(config.skilledEmploymentLengthInAustralia);
                }
                if (skillPoints > 20) { skillPoints = 20; }
                totalPoints += skillPoints;

                if (config.qualification) {
                    totalPoints += self.qualitificationPoints(config.qualification);
                }

                if (config.australianStudyRequirement) {
                    totalPoints += self.australianStudyPoints(config.australianStudyRequirement);
                }

                if (config.specialistEducationQualification) {
                    totalPoints += self.specialistEducationQualificationPoints(config.specialistEducationQualification);
                }

                if (config.accreditedInACommunityLanguage) {
                    totalPoints += self.accreditedInCommunityLanguagePoints(config.accreditedInACommunityLanguage);
                }

                if (config.studiedInRegionalAustralia) {
                    totalPoints += self.studiedInRegionalAustraliaPoints(config.studiedInRegionalAustralia);
                }

                if (config.partnerSkillQualifications) {
                    totalPoints += self.partnerSkillQualificationPoints(config.partnerSkillQualifications);
                }

                if (config.professionalYearInAustralia) {
                    totalPoints += self.professionalYearInAustraliaPoints(config.professionalYearInAustralia);
                }

                return totalPoints;
            }
        };
    }

    /**
     * Points based on age
     */
    agePoints(age) {
        if (age < 18) return 0;
        if (age < 25) return 25;
        if (age < 33) return 30;
        if (age < 40) return 25;
        if (age < 45) return 15;
        return 0;
    }

    calculateAge(birthday, ageOnDate) {
        // TODO: refactor
        const ageDifMs = ageOnDate - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    /**
     * Competency at the English language
     */
    englishLevelPoints(englishLevel) {
        switch (englishLevel) {
            case ENGLISH_LEVEL.Competent: return 0;
            case ENGLISH_LEVEL.Proficient: return 10;
            case ENGLISH_LEVEL.Superior: return 20;
            default: return 0;
        }
    }

    /**
     * Skilled employment in nominated or closely related to nomimated profession
     */
    skilledEmploymentOutAustraliaPoints(years) {
        if (years < 3) return 0;
        if (years < 4) return 5;
        if (years < 7) return 10;
        return 15;
    }

    /**
     * Skilled employment in nominated or closely related to nomimated profession
     */
    skilledEmploymentInAustraliaPoints(years) {
        if (years < 1) return 0;
        if (years < 3) return 5;
        if (years < 5) return 10;
        if (years < 8) return 15;
        return 20;
    }

    /**
     * Points based on qualification achieved
     */
    qualitificationPoints(qualificationLevel) {
        switch (qualificationLevel) {
            case QUALIFICATIONS.DoctorateDegree: return 20;
            case QUALIFICATIONS.BachelorDegree: return 15;
            case QUALIFICATIONS.DiplomaOrTradeQualification: return 10;
            case QUALIFICATIONS.NominatedSkilledOccupation: return 10;
            default: return 0;
        }
    }

    /**
    * At least one degree, diploma or trade qualification from an Australian educational
    * institution that meets the Australian study requirement.
    */
    australianStudyPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    /**
    * A Masters degree by research or a Doctorate degree from an Australian educational
    * institution that included at least two academic years in a relevant field.
    */
    specialistEducationQualificationPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    /**
    * TODO: get from lawyer meeting
    */
    accreditedInCommunityLanguagePoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    /**
    * TODO: get from lawyer meeting
    */
    studiedInRegionalAustraliaPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    /**
    * TODO: get from lawyer meeting
    */
    partnerSkillQualificationPoints(qualifies) {
        return qualifies ? 5 : 0;
    }

    /**
     * Points based on qualification achieved
     */
    professionalYearInAustraliaPoints(qualifies) {
        return qualifies ? 5 : 0;
    }
}
