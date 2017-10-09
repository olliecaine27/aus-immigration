import {assert} from 'chai';
import {calculateSkilledEmployment} from '../../../src/pointsCalculator';

// The Wine Quarter
//
// 	UI team lead (in house), senior software engineer (official HR)
// 	23 Dec 2013 - 9th November 2016
// 	The Wine Quarter, Readers Digest Building, 26-32 Waterloo Street, Surry Hills, Sydney, NSW, 2010, Australia
// 	+61 29333 8300
// 	reception@thewinequarter.com.au
//
// Orchard Marketing
//
// 	UI Developer
// 	July 2013 - Dec 2013
// 	1/285A Crown Street, Surry Hills, NSW, 2010
// 	+61 2933 94333
// 	orchardmarketing.com.au
//
// Lavender
//
// 	Interaction developer
// 	Feb 2013 - June 2013
// 	Level 29, 25 Bligh Street, Sydney, NSW, 2000, Australia
// 	+61 2822 43 111
// 	info@lavender.ad
//
// Technophobia
//
// 	Web developer
// 	Jul 2007 - Dec 2013
// 	Velocity House, 3rd Floor, 3 Solly Street, Sheffield, S1 4DE, United Kingdom
// 	+4411 422 12123
// 	us@technophobia.com
//
// Dillons
//
// 	Shop assistant
// 	November 1999 - September 2003
// 	184 Chester Road, B74 3NA, United Kingdom
// 	+44121 580 8924
// 	Sonia Stevens
//
// Tesco
//
// 	Shop assistant
// 	November 2002 - May 2007
// 	11 Princess Alice Drive, B73 6RB, United Kingdom
// 	+44845 677 9493
// 	Malcolm Walsh

describe('calculateSkilledEmployment', () => {
	describe('When calculating points for skilled outside Australia', () => {
		it('Should only count career history outside Australia', () => {
			let careerHistory = [
				{
					start: new Date(2016, 1, 1),
					end: new Date(2017, 2, 1),
					inAustralia: true
				},
				{
					start: new Date(2015, 1, 1),
					end: new Date(2017, 2, 1),
					inAustralia: false
				}
			]

			let result = calculateSkilledEmployment(careerHistory, false)

			assert.equal(result, 2);
		})
	})
})
