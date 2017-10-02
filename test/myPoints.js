import {assert, expect} from 'chai';
import {calculatePoints} from '../src/pointsCalculator';
import ENGLISH_LEVEL from './../src/constants/englishLevels';
import QUALIFICATIONS from './../src/constants/qualifications';

describe.skip('My total points', () => {

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

	it('Now', () => {
        let result = calculatePoints(config, new Date())

        expect(result).to.equal(85);
	})

    it('Future', () => {
		for (var i = 0; i < 30; i++) {
            // TODO: remove year and use dateCheck.getYear() - better readability
			let year = 2017 + i
			let dateCheck = new Date(year, 11, 27)
            --config.skilledEmploymentLengthOutAustralia
            ++config.skilledEmploymentLengthInAustralia
			console.log(`My total points on year ${year}:`, calculatePoints(config, dateCheck).totalPoints())
		}
	})

})
