import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Australian study points', () => {
	describe('At least one degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.australianStudyPoints(true);

			assert.equal(result, 5);
		})
	})
	describe('No degrees, diplomas or trade qualifications from an Australian educational institution that meets the Australian study requirement', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.australianStudyPoints(false);

			assert.equal(result, 0);
		})
	})
})
