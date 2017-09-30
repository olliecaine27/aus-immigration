import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';
import ENGLISH_LEVEL from '../../../src/englishLevel';

describe('English level points', () => {
	describe('Competent English', () => {
		it('Should return 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.englishLevelPoints(ENGLISH_LEVEL.Competent);

			assert.equal(result, 0);
		})
	})

    describe('Proficient English', () => {
		it('Should return 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.englishLevelPoints(ENGLISH_LEVEL.Proficient);

			assert.equal(result, 10);
		})
	})

    describe('Superior English', () => {
		it('Should return 20 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.englishLevelPoints(ENGLISH_LEVEL.Superior);

			assert.equal(result, 20);
		})
	})
})
