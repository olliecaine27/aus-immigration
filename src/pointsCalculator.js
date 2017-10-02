import * as criteriaPoints from './criteriaPoints';

export function calculateAge(birthday, ageOnDate) {
    const ageDifference = ageOnDate - birthday.getTime();
    const ageDate = new Date(ageDifference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function calculatePoints(applicant, date = new Date()) {
    return {
        calculationDate: date,
        // ageOnDate: calculateAge(applicant.dob, date),
        totalPoints() {
            let totalPoints = 0;

            if (applicant.dob) { totalPoints += criteriaPoints.agePoints(calculateAge(applicant.dob, date)); }

            if (applicant.englishLevel) { totalPoints += criteriaPoints.englishLevelPoints(applicant.englishLevel); }

            let skillPoints = 0;
            if (applicant.skilledEmploymentLengthOutAustralia) {
                skillPoints +=
                    criteriaPoints.skilledEmploymentOutAustraliaPoints(applicant.skilledEmploymentLengthOutAustralia);
            }
            if (applicant.skilledEmploymentLengthInAustralia) {
                skillPoints +=
                    criteriaPoints.skilledEmploymentInAustraliaPoints(applicant.skilledEmploymentLengthInAustralia);
            }
            if (skillPoints > 20) { skillPoints = 20; }
            totalPoints += skillPoints;

            if (applicant.qualification) {
                totalPoints += criteriaPoints.qualitificationPoints(applicant.qualification);
            }

            if (applicant.australianStudyRequirement) {
                totalPoints += criteriaPoints.australianStudyRequirementPoints(applicant.australianStudyRequirement);
            }

            if (applicant.specialistEducationQualification) {
                totalPoints +=
                    criteriaPoints.specialistEducationQualificationPoints(applicant.specialistEducationQualification);
            }

            if (applicant.accreditedInACommunityLanguage) {
                totalPoints +=
                    criteriaPoints.accreditedInCommunityLanguagePoints(applicant.accreditedInACommunityLanguage);
            }

            if (applicant.studiedInRegionalAustralia) {
                totalPoints += criteriaPoints.studiedInRegionalAustraliaPoints(applicant.studiedInRegionalAustralia);
            }

            if (applicant.partnerSkillQualifications) {
                totalPoints += criteriaPoints.partnerSkillQualificationPoints(applicant.partnerSkillQualifications);
            }

            if (applicant.professionalYearInAustralia) {
                totalPoints += criteriaPoints.professionalYearInAustraliaPoints(applicant.professionalYearInAustralia);
            }

            return totalPoints;
        }
    };
}
