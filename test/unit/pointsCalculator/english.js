import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';
import ENGLISH_LEVEL from '../../../src/englishLevel';

describe('English', () => {
	describe('Competent English', () => {
		it('Should accrue 0 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.englishLevelPoints(ENGLISH_LEVEL.Competent);

			assert(result === 0);
		})
	})

    describe('Proficient English', () => {
		it('Should accrue 10 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.englishLevelPoints(ENGLISH_LEVEL.Proficient);

			assert(result === 10);
		})
	})

    describe('Superior English', () => {
		it('Should accrue 20 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.englishLevelPoints(ENGLISH_LEVEL.Superior);

			assert(result === 20);
		})
	})
})
