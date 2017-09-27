import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Age', () => {
	describe('18-24 years', () => {
		it('Should accrue 25 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(20);

			assert(result === 25);
		})
	})

	describe('25-32 years', () => {
		it('Should accrue 30 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(28);

			assert(result === 30);
		})
	})

	describe('33-39 years', () => {
		it('Should accrue 25 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(35);

			assert(result === 25);
		})
	})

	describe('40-44 years', () => {
		it('Should accrue 15 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(42);

			assert(result === 15);
		})
	})

	describe('As a 45 year old', () => {
		it('Should accrue 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.agePoints(50);

			assert(result === 0);
		})
	})
})
