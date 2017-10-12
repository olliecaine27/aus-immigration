import * as criteriaPoints from './criteriaPoints';

export function daysBetweenDates(firstDate, secondDate) {
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / 86400000));
}

export function yearsBetweenDates(firstDate, secondDate) {
    return daysBetweenDates(firstDate, secondDate) / 365;
}

export function calculateSkilledEmploymentYears(careerHistory, countingInAustralia) {
    let total = 0;
    careerHistory.forEach((job) => {
        if (job.inAustralia === countingInAustralia && job.inAppliedOccupation) {
            total += yearsBetweenDates(job.start, job.end);
        }
    });
    return total;
}

export function createPointsReport(applicant, date = new Date()) {
    const pointsCriteria = {
        agePoints: 0,
        englishLevelPoints: 0,
        skilledEmploymentInAustraliaPoints: 0,
        skilledEmploymentOutAustraliaPoints: 0,
        qualitificationPoints: 0,
        australianStudyRequirementPoints: 0,
        specialistEducationQualificationPoints: 0,
        accreditedInCommunityLanguagePoints: 0,
        studiedInRegionalAustraliaPoints: 0,
        partnerSkillQualificationPoints: 0,
        professionalYearInAustraliaPoints: 0
    };

    if (applicant.dob) {
        const age = yearsBetweenDates(applicant.dob, date);
        pointsCriteria.agePoints = criteriaPoints.agePoints(age);
    }

    if (applicant.englishLevel) {
        pointsCriteria.englishLevelPoints
            = criteriaPoints.englishLevelPoints(applicant.englishLevel);
    }

    if (applicant.careerHistory) {
        const skilledYearsInsideOz = calculateSkilledEmploymentYears(applicant.careerHistory, true);
        pointsCriteria.skilledEmploymentInAustraliaPoints
            = criteriaPoints.skilledEmploymentInAustraliaPoints(skilledYearsInsideOz);

        const skilledYearsOutsideOz = calculateSkilledEmploymentYears(applicant.careerHistory, false);
        pointsCriteria.skilledEmploymentOutAustraliaPoints
            = criteriaPoints.skilledEmploymentOutAustraliaPoints(skilledYearsOutsideOz);
    }

    if (applicant.qualification) {
        pointsCriteria.qualitificationPoints
            = criteriaPoints.qualitificationPoints(applicant.qualification);
    }

    if (applicant.australianStudyRequirement) {
        pointsCriteria.australianStudyRequirementPoints
            = criteriaPoints.australianStudyRequirementPoints(applicant.australianStudyRequirement);
    }

    if (applicant.specialistEducationQualification) {
        pointsCriteria.specialistEducationQualificationPoints =
            criteriaPoints.specialistEducationQualificationPoints(applicant.specialistEducationQualification);
    }

    if (applicant.accreditedInACommunityLanguage) {
        pointsCriteria.accreditedInCommunityLanguagePoints =
            criteriaPoints.accreditedInCommunityLanguagePoints(applicant.accreditedInACommunityLanguage);
    }

    if (applicant.studiedInRegionalAustralia) {
        pointsCriteria.studiedInRegionalAustraliaPoints
            = criteriaPoints.studiedInRegionalAustraliaPoints(applicant.studiedInRegionalAustralia);
    }

    if (applicant.partnerSkillQualifications) {
        pointsCriteria.partnerSkillQualificationPoints
            = criteriaPoints.partnerSkillQualificationPoints(applicant.partnerSkillQualifications);
    }

    if (applicant.professionalYearInAustralia) {
        pointsCriteria.professionalYearInAustraliaPoints
            = criteriaPoints.professionalYearInAustraliaPoints(applicant.professionalYearInAustralia);
    }

    return {
        calculationDate: date,
        pointsCriteria,
        tallyPoints() {
            let total = 0;

            Object.keys(pointsCriteria).forEach((points) => {
                total += pointsCriteria[points];
            });

            const skillTotal =
                this.pointsCriteria.skilledEmploymentInAustraliaPoints
                + this.pointsCriteria.skilledEmploymentOutAustraliaPoints;
            if (skillTotal > 20) {
                total -= skillTotal - 20;
            }

            return total;
        }
    };
}
