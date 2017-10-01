import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';
import QUALIFICATIONS from '../../../src/qualifications';

describe('Qualification points', () => {
	describe('A Doctorate degree from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard.', () => {
		it('Should return 20 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.DoctorateDegree);

			assert.equal(result, 20);
		})
	})

	describe('A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard.', () => {
		it('Should return 15 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.BachelorDegree);

			assert.equal(result, 15);
		})
	})

	describe('A diploma or trade qualification completed in Australia', () => {
		it('Should return 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.DiplomaOrTradeQualification);

			assert.equal(result, 10);
		})
	})

	describe('An award or qualification recognised by the relevant assessing authority for your nominated skilled occupation', () => {
		it('Should return 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.NominatedSkilledOccupation);

			assert.equal(result, 10);
		})
	})
})
