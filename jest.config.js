module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
	moduleNameMapper: {
		'^axios$': '<rootDir>/src/__mocks__/axios.js',
	},
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
};
