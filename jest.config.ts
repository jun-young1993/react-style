import type {Config} from 'jest';

const config: Config = {
	testEnvironment: "jsdom",
	verbose: true,
	setupFilesAfterEnv: [
		// "@testing-library/jest-dom"
		'<rootDir>/jest-setup.ts'
	],
}

export default config;