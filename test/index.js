import {assert} from 'chai';
import PointsCalculator from '../src/pointsCalculator';

// https://www.border.gov.au/Trav/Visa-1/189-?modal=/visas/supporting/Pages/skilled/the-points-table.aspx

describe('Points on date', () => {
	describe('Today as a 31 year old', () => {
		it('Should total 30 points', () => {
			let config = {
				dob: new Date(1985, 11, 27)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2018, 8, 22);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 30, 'Oops');
		})
	})
})
