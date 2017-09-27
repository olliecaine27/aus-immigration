import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('English', () => {
	describe('Competent English', () => {
		it('Should accrue 0 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2018, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

    describe('Proficient English', () => {
		it('Should accrue 10 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2018, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

    describe('Superior English', () => {
		it('Should accrue 20 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2018, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})
})
