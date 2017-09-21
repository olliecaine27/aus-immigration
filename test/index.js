import {assert} from 'chai';
import PointsCalculator from '../src/pointsCalculator';

// https://www.border.gov.au/Trav/Visa-1/189-?modal=/visas/supporting/Pages/skilled/the-points-table.aspx

describe('pointsOnDate', () => {
	describe('As an 18 year old', () => {
		it('Should total 25 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2018, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

	describe('As a 25 year old', () => {
		it('Should total 30 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2025, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 30, 'Oops');
		})
	})

	describe('As a 33 year old', () => {
		it('Should total 25 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2033, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

	describe('As a 40 year old', () => {
		it('Should total 15 points', () => {
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
		it('Should total 0 points', () => {
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
