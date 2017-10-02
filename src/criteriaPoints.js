import ENGLISH_LEVEL from './constants/englishLevels';
import QUALIFICATIONS from './constants/qualifications';

/**
 * Points based on age
 */
export function agePoints(age) {
    if (age < 18) return 0;
    if (age < 25) return 25;
    if (age < 33) return 30;
    if (age < 40) return 25;
    if (age < 45) return 15;
    return 0;
}

/**
 * Competency at the English language
 */
export function englishLevelPoints(englishLevel) {
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
export function skilledEmploymentOutAustraliaPoints(years) {
    if (years < 3) return 0;
    if (years < 5) return 5;
    if (years < 8) return 10;
    return 15;
}

/**
 * Skilled employment in nominated or closely related to nomimated profession
 */
export function skilledEmploymentInAustraliaPoints(years) {
    if (years < 1) return 0;
    if (years < 3) return 5;
    if (years < 5) return 10;
    if (years < 8) return 15;
    return 20;
}

/**
 * Points based on qualification achieved
 */
export function qualitificationPoints(qualificationLevel) {
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
export function australianStudyRequirementPoints(qualifies) {
    return qualifies ? 5 : 0;
}

/**
* A Masters degree by research or a Doctorate degree from an Australian educational
* institution that included at least two academic years in a relevant field.
*/
export function specialistEducationQualificationPoints(qualifies) {
    return qualifies ? 5 : 0;
}

/**
* Meet the criteria as a language translator (written word) or interpretor (spoken word).
*/
export function accreditedInCommunityLanguagePoints(qualifies) {
    return qualifies ? 5 : 0;
}

/**
* A least one qualification totalling at least 2 years study in regional Australia,
* e.g in Balaclava, NSW, 2575
*/
export function studiedInRegionalAustraliaPoints(qualifies) {
    return qualifies ? 5 : 0;
}

/**
* Partner is under 50yrs old, has competent English and has a suitable skills assessment from
* the relevant assessing authority for their nominated skilled occupation. Your partner’s nominated
* skilled occupation must be on the same skilled occupations list as your nominated skilled occupation.
*/
export function partnerSkillQualificationPoints(qualifies) {
    return qualifies ? 5 : 0;
}

/**
 * You can receive five points for having completed a Professional Year in Australia in the four years
 * before you are invited to apply.
 * Your Professional Year course must have been in your nominated skilled occupation or a closely
 * related skilled occupation. The course must have lasted for a period totalling at least 12 months.
 */
export function professionalYearInAustraliaPoints(qualifies) {
    return qualifies ? 5 : 0;
}
