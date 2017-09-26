## What it is

I built this project to both test the process of building and deploying an NPM package but also to make it easier for people to calculate their total immigration points set out by the Department of Immigration and Border Protection, both now and in the future (as some variables change based on time).

The official points list set by the Australian Government: 
https://www.border.gov.au/Trav/Visa-1/189-?modal=/visas/supporting/Pages/skilled/the-points-table.aspx

## Features

* Build with [Babel](https://babeljs.io). (ES6 -> ES5)
* Test with [mocha](https://mochajs.org).
* Cover with [istanbul](https://github.com/gotwarlost/istanbul).
* Check with [eslint](eslint.org).
* Deploy with [Travis](travis-ci.org).

## Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests. Tests can be written with ES6 (WOW!)
- `npm test:watch` - You can even re-run tests on file changes!
- `npm run cover` - Yes. You can even cover ES6 code.
- `npm run lint` - We recommend using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It's fantastic.
- `npm run test:examples` - We recommend writing examples on pure JS for better understanding module usage.
- `npm run build` - Do some magic with ES6 to create ES5 code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing you module.

## Installation
Just clone this repo and remove `.git` folder.

