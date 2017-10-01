import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Age points', () => {
	describe('As a 16 year old', () => {
		it('Should return 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(16);

			assert.equal(result, 0);
		})
	})

	describe('18-24 years old', () => {
		it('Should return 25 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(20);

			assert.equal(result, 25);
		})
	})

	describe('25-32 years', () => {
		it('Should return 30 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(28);

			assert.equal(result, 30);
		})
	})

	describe('33-39 years', () => {
		it('Should return 25 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(35);

			assert.equal(result, 25);
		})
	})

	describe('40-44 years', () => {
		it('Should return 15 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(42);

			assert.equal(result, 15);
		})
	})

	describe('As a 45 year old', () => {
		it('Should return 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(50);

			assert.equal(result, 0);
		})
	})
})
