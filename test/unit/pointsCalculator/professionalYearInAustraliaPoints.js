import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Professioanl year in Australia', () => {
	describe('Professional year in Australia', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.professionalYearInAustraliaPoints(true);

			assert.equal(result, 5);
		})
	})
})
