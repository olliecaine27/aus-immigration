import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Specialist education qualification', () => {
	describe('A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field.', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.specialistEducationQualificationPoints(true);

			assert(result === 5);
		})
	})
	describe('Doesnt have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field.', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.specialistEducationQualificationPoints(false);

			assert(result === 0);
		})
	})
})
