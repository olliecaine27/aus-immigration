import {assert} from 'chai';
import {yearsBetweenDates} from '../../../src/pointsCalculator';

describe('yearsBetweenDates', () => {
	describe('When calculating years between dates', () => {
		it('Should return total', () => {
            var yearsDifference = 20
            var firstDate = new Date(2000, 1, 1)
            var secondDate = new Date(2000 + yearsDifference , 1, 1)

            let result = yearsBetweenDates(firstDate, secondDate)

			assert.isAbove(result, yearsDifference)
			assert.isBelow(result, yearsDifference + 1)
		});
	})
})
