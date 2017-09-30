import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Calculate points', () => {
	describe('When inland and overseas combined points exceed 20', () => {
		it('Should be capped at 20 points', () => {
			let pointsCalculator = new PointsCalculator();
            const config = {
                dob: new Date(2017 - 50, 11, 27),
                skilledEmploymentLengthOutAustralia: 9,
                skilledEmploymentLengthInAustralia: 9,
            }

			let result = pointsCalculator.calculatePoints(config);

			assert.equal(result, 20, 'Result not 20');
		})
	})
})
