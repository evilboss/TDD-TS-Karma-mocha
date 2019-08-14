// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            'src/**/*.ts',
        ],


        plugins: [
            require('karma-jasmine'),
            require('karma-mocha-reporter'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-typescript')

        ],
        client: {
            clearContext: true // leave Jasmine Spec Runner output visible in browser
        },

        browserConsoleLogOptions: {
            level: "debug",
            format: "%b %T: %m",
            terminal: true
        },
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ['mocha', 'karma-typescript'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        browserNoActivityTimeout: 60000
    });
};
