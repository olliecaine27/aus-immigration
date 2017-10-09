import * as criteriaPoints from './criteriaPoints';

export function daysBetweenDates(firstDate, secondDate) {
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / 86400000));
}

export function yearsBetweenDates(firstDate, secondDate) {
    return daysBetweenDates(firstDate, secondDate) / 365;
}

export function calculateSkilledEmploymentYears(careerHistory, countingInAustralia, years = 10) {
    let total = 0;
    for (const job of careerHistory) {
        if (job.inAustralia === countingInAustralia) {
            total += yearsBetweenDates(job.start, job.end);
        }
    }
    return total;
}

export function createPointsReport(applicant, date = new Date()) {
    // TODO: refactor this so it returns a report object containing:
    // 1. the points acquired per criteria
    // 2. a method to tally them all up
    // 3. a array of unclaimed points

    return {
        calculationDate: date,
        totalPoints() {
            let totalPoints = 0;

            if (applicant.dob) { totalPoints += criteriaPoints.agePoints(daysBetweenDates(applicant.dob, date)); }

            if (applicant.englishLevel) { totalPoints += criteriaPoints.englishLevelPoints(applicant.englishLevel); }

            if (applicant.careerHistory) {
                let skillPoints = 0;

                const skilledYearsInsideOz = calculateSkilledEmploymentYears(applicant.careerHistory, true);
                skillPoints += criteriaPoints.skilledEmploymentInAustraliaPoints(skilledYearsInsideOz);

                const skilledYearsOutsideOz = calculateSkilledEmploymentYears(applicant.careerHistory, false);
                skillPoints += criteriaPoints.skilledEmploymentOutAustraliaPoints(skilledYearsOutsideOz);

                if (skillPoints > 20) { skillPoints = 20; }

                totalPoints += skillPoints;
            }

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
