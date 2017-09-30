import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Partner skill qualification points', () => {
	describe('Partner skill qualifications', () => {
		it('Should return 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.partnerSkillQualificationPoints(true);

			assert.equal(result, 5);
		})
	})
})
