import {assert, expect} from 'chai';
import PointsCalculator from '../src/pointsCalculator';
import ENGLISH_LEVEL from './../src/englishLevel';

describe.only('Olivers case', () => {
	it('Now', () => {
		let personInfo = {
			dob: new Date(1985, 11, 27)
		}
		let pointsCalculator = new PointsCalculator()
        let config = {
            dob: new Date(1985, 11, 27),
            englishLevel: ENGLISH_LEVEL.Superior,
            skilledEmploymentLengthOutAustralia: 6,
            skilledEmploymentLengthInAustralia: 4
        }

        let result = pointsCalculator.calculatePoints(config, new Date())

        expect(result).to.equal(70);
	})

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
