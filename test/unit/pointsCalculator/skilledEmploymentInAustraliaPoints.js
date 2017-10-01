import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Skilled employment in Australia in the last 10 years', () => {
	describe('Less than 1 year', () => {
		it('Should return 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(0.5);

			assert.equal(result, 0);
		})
	})

	describe('1-2 years', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(1.5);

			assert.equal(result, 5);
		})
	})

	describe('3-4 years', () => {
		it('Should return 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(3.5);

			assert.equal(result, 10);
		})
	})

	describe('5-7 years', () => {
		it('Should return 15 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(6);

			assert.equal(result, 15);
		})
	})

	describe('8-10 years', () => {
		it('Should return 20 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(9);

			assert.equal(result, 20);
		})
	})

	describe('More than 10 years', () => {
		it('Should return 20 points', () => {
			// TODO: verify this scenario as the official points table doesn't include > 10ys 
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.skilledEmploymentInAustraliaPoints(9);

			assert.equal(result, 20);
		})
	})
})
