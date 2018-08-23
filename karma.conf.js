module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            type: 'text-summary',
            dir: 'coverage/',
            includeAllSources: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity
    })
}