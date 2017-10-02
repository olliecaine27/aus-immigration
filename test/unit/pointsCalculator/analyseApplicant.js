import {assert} from 'chai';
import {analyseApplicant} from '../../../src/pointsCalculator';

describe('Calculate points', () => {
	describe('When calculating points', () => {
		it('Should default to todays date', () => {
			let result = analyseApplicant()

			assert.equal(result.calculationDate.getDate(), new Date().getDate());
			assert.equal(result.calculationDate.getMonth(), new Date().getMonth());
			assert.equal(result.calculationDate.getFullYear(), new Date().getFullYear());
		});
	})

	describe('When inland and overseas combined points exceed 20', () => {
		it('Should be capped at 20 points', () => {
		    const applicantDetails = {
		        skilledEmploymentLengthOutAustralia: 9,
		        skilledEmploymentLengthInAustralia: 9,
		    }

			let result = analyseApplicant(applicantDetails);

			assert.equal(result.totalPoints(), 20);
		})
	})
})
