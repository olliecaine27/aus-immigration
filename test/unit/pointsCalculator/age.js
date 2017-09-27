import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Age', () => {
	describe('18-24 years', () => {
		it('Should accrue 25 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2018, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

	describe('25-32 years', () => {
		it('Should accrue 30 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2025, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 30, 'Oops');
		})
	})

	describe('33-39 years', () => {
		it('Should accrue 25 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2033, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

	describe('40-44 years', () => {
		it('Should accrue 15 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2040, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 15, 'Oops');
		})
	})

	describe('As a 45 year old', () => {
		it('Should accrue 0 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2045, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 0, 'Oops');
		})
	})
})
