import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Studied in Australia points', () => {
	describe('Study in regional Australia or a low population growth metropolitan area that meets the Australian study requirement', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.studiedInRegionalAustraliaPoints(true);

			assert.equal(result, 5);
		})
	})
})
