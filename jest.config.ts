import type {Config} from 'jest';

const config: Config = {
	testEnvironment: "jsdom",
	verbose: true,
	setupFilesAfterEnv: [
		"@testing-library/jest-dom"
		// '<rootDir>/jest-setup.ts'
	],
	// transformIgnorePatterns: [
	// 	"node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|dom)",	
	// ]
}

export default config;