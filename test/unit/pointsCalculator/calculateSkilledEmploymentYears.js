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
})
