import {assert, expect} from 'chai';
import PointsCalculator from '../src/pointsCalculator';
import ENGLISH_LEVEL from './../src/englishLevel';
import QUALIFICATIONS from './../src/qualifications';

describe.only('Olivers case', () => {
	it('Now', () => {
        let config = {
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
        let pointsCalculator = new PointsCalculator()

        let result = pointsCalculator.calculatePoints(config, new Date())

        expect(result).to.equal(85);
	})

    // A Doctorate degree from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard.	20
    // A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard.	15
    // A diploma or trade qualification completed in Australia	10
    // An award or qualification recognised by the relevant assessing authority for your nominated skilled occupation.

    // it('Future', () => {
	// 	let config = {
	// 		dob: new Date(1985, 11, 27)
	// 	}
	// 	let pointsCalculator = new PointsCalculator(config)
    //
	// 	for (var i = 0; i < 30; i++) {
	// 		let yearCheck = 2018 + i
	// 		let dateCheck = new Date(yearCheck, 11, 27)
	// 		console.log(`Ollie\'s total points on year ${yearCheck}:`, pointsCalculator.pointsOnDate(dateCheck))
	// 	}
	// })
})
