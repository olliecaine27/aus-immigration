import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Skilled employment outside Australia in the last 10 years', () => {
	describe('Less than 3 years', () => {
		it('Should return 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentOutAustraliaPoints(2);

			assert.equal(result, 0);
		})
	})

	describe('3-4 years', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentOutAustraliaPoints(3.5);

			assert.equal(result, 5);
		})
	})

	describe('5-7 years', () => {
		it('Should return 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentOutAustraliaPoints(6);

			assert.equal(result, 10);
		})
	})

	describe('8-10 years', () => {
		it('Should return 15 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentOutAustraliaPoints(9);

			assert.equal(result, 15);
		})
	})
})
