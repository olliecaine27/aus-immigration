import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Australian study requirement', () => {
	describe('At least one degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.australianStudyPoints(true);

			assert(result === 5);
		})
	})
	describe('No degrees, diplomas or trade qualifications from an Australian educational institution that meets the Australian study requirement', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.australianStudyPoints(false);

			assert(result === 0);
		})
	})
})
