import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Calculate points', () => {
	describe('When calculating points', () => {
		it('Should default to todays date', () => {
			// arrange
			let pointsCalculator = new PointsCalculator();

			// act
			let result = pointsCalculator.calculatePoints()

			// assert
			assert.equal(result.calculationDate.getDate(), new Date().getDate());
			assert.equal(result.calculationDate.getMonth(), new Date().getMonth());
			assert.equal(result.calculationDate.getFullYear(), new Date().getFullYear());
		});
	})

	describe('When inland and overseas combined points exceed 20', () => {
		it('Should be capped at 20 points', () => {
			// arrange
			let pointsCalculator = new PointsCalculator();

			// act
		    const config = {
		        skilledEmploymentLengthOutAustralia: 9,
		        skilledEmploymentLengthInAustralia: 9,
		    }
			let result = pointsCalculator.calculatePoints(config);

			// assert
			assert.equal(result.totalPoints(), 20);
		})
	})
})
