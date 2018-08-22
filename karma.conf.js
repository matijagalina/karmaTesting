module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],
        reporters: ['mocha'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity
    })
}