import {assert} from 'chai';
import {skilledEmploymentOutAustraliaPoints} from '../../../src/criteriaPoints';

describe('Skilled employment outside Australia in the last 10 years', () => {
	describe('Less than 3 years', () => {
		it('Should return 0 points', () => {
			let result = skilledEmploymentOutAustraliaPoints(2);

			assert.equal(result, 0);
		})
	})

	describe('3-4 years', () => {
		it('Should return 5 points', () => {
			let result = skilledEmploymentOutAustraliaPoints(3.5);

			assert.equal(result, 5);
		})
	})

	describe('5-7 years', () => {
		it('Should return 10 points', () => {
			let result = skilledEmploymentOutAustraliaPoints(6);

			assert.equal(result, 10);
		})
	})

	describe('8-10 years', () => {
		it('Should return 15 points', () => {
			let result = skilledEmploymentOutAustraliaPoints(9);

			assert.equal(result, 15);
		})
	})

	describe('More than 10 years', () => {
		it.skip('Should return 20 points', () => {
			// TODO: verify this scenario as the official points table doesn't include > 10ys
			let result = skilledEmploymentOutAustraliaPoints(15);

			assert.equal(result, 15);
		})
	})
})
