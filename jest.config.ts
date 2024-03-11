/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest"

const config: Config = {
    // A list of paths to directories that Jest should use to search for files in
    roots: ["<rootDir>"],
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ["coverage"],
    // The test environment that will be used for testing
    testEnvironment: "node",
    // A map from regular expressions to paths to transformers
    transform: {
        ".+\\.ts$": "ts-jest",
    },
}

export default config