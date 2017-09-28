import {assert} from 'chai';
import PointsCalculator from '../../../src/pointsCalculator';

describe('Other', () => {

	describe('Accredited in a community language', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.accreditedInCommunityLanguagePoints(true);

			assert(result === 5);
		})
	})

	describe('Study in regional Australia or a low population growth metropolitan area that meets the Australian study requirement', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.studiedInRegionalAustraliaPoints(true);

			assert(result === 5);
		})
	})

	describe('Partner skill qualifications', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.partnerSkillQualificationPoints(true);

			assert(result === 5);
		})
	})

	describe('Professional year in Australia', () => {
		it('Should accrue 5 points', () => {
			let pointsCalculator = new PointsCalculator();

			let result = pointsCalculator.professionalYearInAustraliaPoints(true);

			assert(result === 5);
		})
	})
})
