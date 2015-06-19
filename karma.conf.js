module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify', 'expect'],
    browserify: {
      debug: true
    },
    files: [
      'test/*.js'
    ],
    exclude: [],
    preprocessors: {
      'lib/*.js': ['browserify'],
      'assertions/*.js': ['browserify'],
      'test/*.js': ['browserify']
    },
    // reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
