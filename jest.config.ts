import type {Config} from 'jest';

const config: Config = {
	testEnvironment: "jsdom",
	verbose: true,
	setupFilesAfterEnv: [
		'<rootDir>/jest-setup.ts'
	],
}

export default config;