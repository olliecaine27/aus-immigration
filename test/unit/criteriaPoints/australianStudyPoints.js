import {assert} from 'chai';
import {australianStudyRequirementPoints} from '../../../src/criteriaPoints';

describe('australianStudyRequirementPoints', () => {
	describe('At least one degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement', () => {
		it('Should return 5 points', () => {
			let result = australianStudyRequirementPoints(true);

			assert.equal(result, 5);
		})
	})

	describe('No degrees, diplomas or trade qualifications from an Australian educational institution that meets the Australian study requirement', () => {
		it('Should return 5 points', () => {
			let result = australianStudyRequirementPoints(false);

			assert.equal(result, 0);
		})
	})
})
