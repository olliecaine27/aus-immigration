import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Skilled employment in Australia in the last 10 years', () => {
	describe('Less than 1 year', () => {
		it('Should return 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(0.5);

			assert.equal(result, 0, 'Result not 0');
		})
	})

	describe('1-2 years', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(1.5);

			assert.equal(result, 5, 'Result not 5');
		})
	})

	describe('3-4 years', () => {
		it('Should return 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(3.5);

			assert.equal(result, 10, 'Result not 10');
		})
	})

	describe('5-7 years', () => {
		it('Should return 15 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(6);

			assert.equal(result, 15, 'Result not 15');
		})
	})

	describe('8-10 years', () => {
		it('Should return 20 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(9);

			assert.equal(result, 20, 'Result not 20');
		})
	})
})
