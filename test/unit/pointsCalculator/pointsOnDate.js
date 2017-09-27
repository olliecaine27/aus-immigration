import {assert} from 'chai';
import PointsCalculator from '../../src/pointsCalculator';

// Age
// 	18-24 years	25
// 	25-32 years	30
// 	33-39 years	25
// 	40-44 years	15

// English
// 	Competent English	0
// 	Proficient English	10
// 	Superior English	20

// Skilled employment in the last 10 years – outside Australia
// 	Less than 3 years	0
// 	3-4 years	5
// 	5-7 years	10
// 	8-10 years	15

// Skilled employment in the last 10 years – in Australia
// 	Less than 1 year	0
// 	1-2 years	5
// 	3-4 years	10
// 	5-7 years	15
// 	8-10 years	20

// Qualifications
// 	A Doctorate degree from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard.	20
// 	A Bachelor degree from an Australian educational institution or a Bachelor qualification, from another educational institution that is of a recognised standard.	15
// 	A diploma or trade qualification completed in Australia	10
// 	An award or qualification recognised by the relevant assessing authority for your nominated skilled occupation.	10

// Australian study requirement
// 	At least one degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement	5
//
// Specialist education qualification
// 	A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field.	5

// Other
// 	Accredited in a community language	5
// 	Study in regional Australia or a low population growth metropolitan area that meets the Australian study requirement	5
// 	Partner skill qualifications	5
// 	Professional year in Australia	5

describe('Points on a given date', () => {
	describe('As an 18 year old', () => {
		it('Should accrue 25 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2018, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

	describe('As a 25 year old', () => {
		it('Should accrue 30 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2025, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 30, 'Oops');
		})
	})

	describe('As a 33 year old', () => {
		it('Should accrue 25 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2033, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 25, 'Oops');
		})
	})

	describe('As a 40 year old', () => {
		it('Should accrue 15 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2040, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 15, 'Oops');
		})
	})

	describe('As a 45 year old', () => {
		it('Should accrue 0 points', () => {
			let config = {
				dob: new Date(2000, 0, 1)
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2045, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 0, 'Oops');
		})
	})

	describe('As a person with Proficient English', () => {
		it('Should accrue 10 points', () => {
			let config = {
				englishLevel: 1
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2045, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 10, 'Oops');
		})
	})

	describe('As a person with Superior English', () => {
		it('Should accrue 20 points', () => {
			let config = {
				englishLevel: 2
			}
			let pointsCalculator = new PointsCalculator(config);

			let today = new Date(2045, 0, 1);
			let result = pointsCalculator.pointsOnDate(today);

			assert(result === 20, 'Oops');
		})
	})

	describe('As a person with 3-4yrs skilled employment in the last 10 years outside Australia', () => {
		it('Should accrue 5 points', () => {
			// TODO
		})
	})

	describe('As a person with 5-7yrs skilled employment in the last 10 years outside Australia', () => {
		it('Should accrue 10 points', () => {
			// TODO
		})
	})

	describe('As a person with 8-10yrs skilled employment in the last 10 years outside Australia', () => {
		it('Should accrue 15 points', () => {
			// TODO
		})
	})

	describe('As a person with 1-2yrs skilled employment in the last 10 years outside Australia', () => {
		it('Should accrue 5 points', () => {
			// TODO
		})
	})

	describe('As a person with 3-4yrs skilled employment in the last 10 years outside Australia', () => {
		it('Should accrue 10 points', () => {
			// TODO
		})
	})

	describe('As a person with 5-7yrs skilled employment in the last 10 years outside Australia', () => {
		it('Should accrue 15 points', () => {
			// TODO
		})
	})

	describe('As a person with 8-10yrs skilled employment in the last 10 years outside Australia', () => {
		it('Should accrue 20 points', () => {
			// TODO
		})
	})
})
