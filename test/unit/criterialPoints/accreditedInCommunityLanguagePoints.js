import {assert} from 'chai';
import {accreditedInCommunityLanguagePoints} from '../../../src/criteriaPoints';

describe('accreditedInCommunityLanguagePoints', () => {
	describe('Accredited in a community language', () => {
		it('Should return 5 points', () => {
			let result = accreditedInCommunityLanguagePoints(true);

			assert.equal(result, 5);
		})
	})
})
