import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';
import QUALIFICATIONS from '../../../src/qualifications';

describe('Qualifications', () => {
	describe('A Doctorate degree from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard.', () => {
		it('Should accrue 20 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.DoctorateDegree);

			assert(result === 20, 'Result not 20');
		})
	})

	describe('A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard.', () => {
		it('Should accrue 15 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.BachelorDegree);

			assert(result === 15, 'Result not 15');
		})
	})

	describe('A diploma or trade qualification completed in Australia', () => {
		it('Should accrue 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.DiplomaOrTradeQualification);

			assert(result === 10, 'Result not 10');
		})
	})

	describe('An award or qualification recognised by the relevant assessing authority for your nominated skilled occupation', () => {
		it('Should accrue 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.qualitificationPoints(QUALIFICATIONS.NominatedSkilledOccupation);

			assert(result === 10, 'Result not 10');
		})
	})
})
