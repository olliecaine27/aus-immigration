import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Accredited in a community language', () => {
	describe('Accredited in a community language', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.accreditedInCommunityLanguagePoints(true);

			assert.equal(result, 5);
		})
	})
})
