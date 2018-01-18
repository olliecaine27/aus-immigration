import {assert, expect} from 'chai';
import {createPointsReport} from '../src/pointsCalculator';
import ENGLISH_LEVEL from './../src/constants/englishLevels';
import QUALIFICATIONS from './../src/constants/qualifications';

describe('My total points', () => {

    const applicantInfo = {
        dob: new Date(1985, 10, 27),
        englishLevel: ENGLISH_LEVEL.Superior,
        careerHistory: [
            {
                // Fluent Retail / Software Engineer
                start: new Date(2017, 1, 20),
                end: new Date(),
                inAppliedOccupation: false,
                inAustralia: true
            },
            {
                // The Wine Quarter / Senior Software Engineer
                start: new Date(2013, 11, 23),
                end: new Date(2016, 10, 9),
                inAppliedOccupation: false,
                inAustralia: true
            },
            {
                // Orchard Marketing / UI Developer
                start: new Date(2013, 6),
                end: new Date(2013, 11, 13),
                inAppliedOccupation: false,
                inAustralia: true
            },
            {
                // Lavender / Interaction developer
                start: new Date(2013, 1, 4),
                end: new Date(2013, 5, 28),
                inAppliedOccupation: false,
                inAustralia: true
            },
            {
                // Technophobia / Web developer
                start: new Date(2007, 6),
                end: new Date(2013, 11),
                inAppliedOccupation: false,
                inAustralia: false
            }
        ],
        qualification: QUALIFICATIONS.BachelorDegree,
        // One or more degrees, diplomas or trade qualifications awarded by an Australian
        // educational institution and meet the Australian Study Requirement.
        australianStudyRequirement: false,
        // A Masters degree by research or a Doctorate degree from an Australian educational institution
        // that included at least two academic years in a relevant field.
        specialistEducationQualification: false,
        // You can receive five points for credentialled community language at the time you are invited to apply.
        // Credentialled community langue is accredited by the National Accreditation Authority for Translators
        // and Interpreters (NAATI).
        accreditedInACommunityLanguage: false,
        // You can receive five points if you meet the Australian Study Requirement to have lived and studied
        // in regional Australia or a low population growth metropolitan area at the time you are invited to apply.
        studiedInRegionalAustralia: false,
        // You can receive five points if your partner meets requirements at the time you are invited to apply
        // relating to:
        // 1. Age; 2. English Language Ability; 3. A suitable skills assessment in a nominated occupation on
        // the same Skilled Occupation List used for your application.
        // You cannot receive these points if your partner is not included on your visa application, or if
        // they are an Australian citizen or an Australian permanent resident.
        partnerSkillQualifications: false,
        // You can receive five points for having completed a Professional Year in Australia in the four years before you are invited to apply.
        // Your Professional Year course must have been in your nominated skilled occupation or a closely related skilled occupation. The course must have lasted for a period totalling at least 12 months.
        professionalYearInAustralia: false,
    }

    it('From today', () => {
		for (var i = 0; i < 30; i++) {
			let dateCheck = new Date(2016 + i, 10, 27)
            let report = createPointsReport(applicantInfo, dateCheck)

            console.log(`Total points on birthday in ${dateCheck.getFullYear()}: ${report.tallyPoints()}`)
            // console.log(report.pointsCriteria)
		}
	})

})
