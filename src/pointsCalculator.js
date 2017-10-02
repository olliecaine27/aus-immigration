import * as criteriaPoints from './criteriaPoints';

// TODO: decide if these methods even need to belong in a class. Do we make the methods static
// (as they don't use "this") or do I just move them to a classless file simply containing the methods?
// Maybe make results object a class because it does contain state (and therefore uses 'this').
export default class {

    calculatePoints(config, date = new Date()) {
        const self = this;
        return {
            calculationDate: date,
            ageOnDate: 22,
            totalPoints() {
                let totalPoints = 0;

                if (config.dob) { totalPoints += criteriaPoints.agePoints(self.calculateAge(config.dob, date)); }

                if (config.englishLevel) { totalPoints += criteriaPoints.englishLevelPoints(config.englishLevel); }

                let skillPoints = 0;
                if (config.skilledEmploymentLengthOutAustralia) {
                    skillPoints +=
                        criteriaPoints.skilledEmploymentOutAustraliaPoints(config.skilledEmploymentLengthOutAustralia);
                }
                if (config.skilledEmploymentLengthInAustralia) {
                    skillPoints +=
                        criteriaPoints.skilledEmploymentInAustraliaPoints(config.skilledEmploymentLengthInAustralia);
                }
                if (skillPoints > 20) { skillPoints = 20; }
                totalPoints += skillPoints;

                if (config.qualification) {
                    totalPoints += criteriaPoints.qualitificationPoints(config.qualification);
                }

                if (config.australianStudyRequirement) {
                    totalPoints += criteriaPoints.australianStudyRequirementPoints(config.australianStudyRequirement);
                }

                if (config.specialistEducationQualification) {
                    totalPoints +=
                        criteriaPoints.specialistEducationQualificationPoints(config.specialistEducationQualification);
                }

                if (config.accreditedInACommunityLanguage) {
                    totalPoints +=
                        criteriaPoints.accreditedInCommunityLanguagePoints(config.accreditedInACommunityLanguage);
                }

                if (config.studiedInRegionalAustralia) {
                    totalPoints += criteriaPoints.studiedInRegionalAustraliaPoints(config.studiedInRegionalAustralia);
                }

                if (config.partnerSkillQualifications) {
                    totalPoints += criteriaPoints.partnerSkillQualificationPoints(config.partnerSkillQualifications);
                }

                if (config.professionalYearInAustralia) {
                    totalPoints += criteriaPoints.professionalYearInAustraliaPoints(config.professionalYearInAustralia);
                }

                return totalPoints;
            }
        };
    }

    calculateAge(birthday, ageOnDate) {
        const ageDifference = ageOnDate - birthday.getTime();
        const ageDate = new Date(ageDifference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
