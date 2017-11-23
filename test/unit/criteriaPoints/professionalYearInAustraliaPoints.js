import {assert} from 'chai';
import {professionalYearInAustraliaPoints} from '../../../src/criteriaPoints';

describe('professionalYearInAustraliaPoints', () => {
	describe('Professional year in Australia', () => {
		it('Should return 5 points', () => {
			let result = professionalYearInAustraliaPoints(true);

			assert.equal(result, 5);
		})
	})
})
