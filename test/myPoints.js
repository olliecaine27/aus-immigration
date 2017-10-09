import {assert, expect} from 'chai';
import {createPointsReport} from '../src/pointsCalculator';
import ENGLISH_LEVEL from './../src/constants/englishLevels';
import QUALIFICATIONS from './../src/constants/qualifications';

describe('My total points', () => {

    const config = {
        dob: new Date(1985, 11, 27),
        englishLevel: ENGLISH_LEVEL.Superior,
        skilledEmploymentLengthOutAustralia: 6,
        skilledEmploymentLengthInAustralia: 4,
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
        professionalYearInAustralia: false
    }

    it('From today', () => {
		for (var i = 0; i < 30; i++) {
			let dateCheck = new Date(2017 + i, 11, 27)
            --config.skilledEmploymentLengthOutAustralia
            ++config.skilledEmploymentLengthInAustralia
            let totalPoints = createPointsReport(config, dateCheck).totalPoints()
			console.log(`My total points in ${dateCheck.getFullYear()}: ${totalPoints}`)
		}
	})

})
