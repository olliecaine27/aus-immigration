import {assert, expect} from 'chai';
import {analyseApplicant} from '../src/pointsCalculator';
import ENGLISH_LEVEL from './../src/constants/englishLevels';
import QUALIFICATIONS from './../src/constants/qualifications';

describe('My total points', () => {

    const config = {
        dob: new Date(1985, 11, 27),
        englishLevel: ENGLISH_LEVEL.Superior,
        skilledEmploymentLengthOutAustralia: 6,
        skilledEmploymentLengthInAustralia: 4,
        qualification: QUALIFICATIONS.BachelorDegree,
        australianStudyRequirement: false,
        specialistEducationQualification: false,
        accreditedInACommunityLanguage: false,
        studiedInRegionalAustralia: false,
        partnerSkillQualifications: false,
        professionalYearInAustralia: false
    }

    it('From today', () => {
		for (var i = 0; i < 30; i++) {
			let dateCheck = new Date(2017 + i, 11, 27)
            --config.skilledEmploymentLengthOutAustralia
            ++config.skilledEmploymentLengthInAustralia
            let totalPoints = analyseApplicant(config, dateCheck).totalPoints()
			console.log(`My total points in ${dateCheck.getFullYear()}: ${totalPoints}`)
		}
	})

})
