import {assert} from 'chai';
import {daysBetweenDates} from '../../../src/pointsCalculator';

describe('daysBetweenDates', () => {
	describe('When calculating days between dates', () => {
		it('Should return a round number', () => {
            var daysDifference = 10
            var firstDate = new Date(2008, 1, 5)
            var secondDate = new Date(2008, 1, firstDate.getDate() + daysDifference)

            let result = daysBetweenDates(firstDate, secondDate)

            assert.equal(result, daysDifference)
		});
	})
})
