module.exports = {
    roots: ["./src"],
    setupFilesAfterEnv: ["./jest.setup.ts"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    testPathIgnorePatterns: ["node_modules/"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/*.test.(ts|tsx|js|jsx)"],
    moduleNameMapper: {
        // Mocks out all these file formats when tests are run
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "identity-obj-proxy",
        "\\.(svg)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom"
};
