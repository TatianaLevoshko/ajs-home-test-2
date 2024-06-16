module.exports = {
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js'],
	testPathIgnorePatterns: ['/node_modules/'],
	transform: {
	  '^.+\\.js$': 'babel-jest',
	},
  }