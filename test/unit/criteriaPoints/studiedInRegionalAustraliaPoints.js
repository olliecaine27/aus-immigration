import {assert} from 'chai';
import {studiedInRegionalAustraliaPoints} from '../../../src/criteriaPoints';

describe('studiedInRegionalAustraliaPoints', () => {
	describe('Study in regional Australia or a low population growth metropolitan area that meets the Australian study requirement', () => {
		it('Should return 5 points', () => {
			let result = studiedInRegionalAustraliaPoints(true);

			assert.equal(result, 5);
		})
	})
})
