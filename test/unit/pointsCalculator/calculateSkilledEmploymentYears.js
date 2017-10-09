import {assert} from 'chai';
import {calculateSkilledEmploymentYears} from '../../../src/pointsCalculator';

describe('calculateSkilledEmploymentYears', () => {
	describe('When calculating points for skilled outside Australia', () => {
		it('Should only count career history outside Australia', () => {
			let careerHistory = [
				{
					start: new Date(2016, 1, 1),
					end: new Date(2017, 2, 1),
					inAustralia: true
				},
				{
					start: new Date(2015, 1, 1),
					end: new Date(2016, 7, 3),
					inAustralia: false
				}
			]

			let result = calculateSkilledEmploymentYears(careerHistory, false)

			assert.isAbove(result, 1.5)
			assert.isBelow(result, 1.6)
		})
	})

	describe('When calculating points', () => {
		it('Should not include experience before specified date/number of years', () => {
			// let careerHistory = [
			// 	{
			// 		start: new Date(2016, 1, 1),
			// 		end: new Date(2017, 2, 1),
			// 		inAustralia: true
			// 	}
			// ]

			// let result = calculateSkilledEmploymentYears(careerHistory, false, 1)

			// assert.isAbove(result, 1.5)
			// assert.isBelow(result, 1.6)
		})
	})
})
