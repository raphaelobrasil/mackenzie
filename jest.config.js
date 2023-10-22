/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
}

module.exports = createJestConfig(config)
