import {assert} from 'chai';
import {createPointsReport} from '../../../src/pointsCalculator';

describe('createPointsReport', () => {
	describe('When calculating points', () => {
		it('Should default to todays date', () => {
			let result = createPointsReport()

			assert.equal(result.calculationDate.getDate(), new Date().getDate());
			assert.equal(result.calculationDate.getMonth(), new Date().getMonth());
			assert.equal(result.calculationDate.getFullYear(), new Date().getFullYear());
		});
	})

	describe('When inland and overseas combined points exceed 20', () => {
		it('Should be capped at 20 points', () => {
		    const applicantDetails = {
				careerHistory: [
		            {
		                start: new Date(2000, 1),
		                end: new Date(2020, 1),
		                inAppliedOccupation: true,
		                inAustralia: false
		            },
		            {
						start: new Date(2000, 1),
		                end: new Date(2020, 1),
		                inAppliedOccupation: true,
		                inAustralia: true
		            }
		        ]
		    }

			let result = createPointsReport(applicantDetails);

			assert.equal(result.totalPoints(), 20);
		})
	})
})
