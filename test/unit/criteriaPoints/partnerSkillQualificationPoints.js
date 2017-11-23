import {assert} from 'chai';
import {partnerSkillQualificationPoints} from '../../../src/criteriaPoints';

describe('partnerSkillQualificationPoints', () => {
	describe('Partner skill qualifications', () => {
		it('Should return 5 points', () => {
			let result = partnerSkillQualificationPoints(true);

			assert.equal(result, 5);
		})
	})
})
