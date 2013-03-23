// base path, that will be used to resolve files and exclude
basePath = 'src/main/webapp';

// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,
    REQUIRE,
    REQUIRE_ADAPTER,

    // put all libs in requirejs 'paths' config here (included: false)
    {pattern:'assets/js/libs/*.js', included:false},

    // all src and test modules (included: false)
    {pattern:'app/**/*.js', included:false},
    {pattern:'test/**/*.test.js', included:false},

    // test main require module last
    'test/test-main.js'
];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'junit'];

// web server port
port = 9876;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows), SET IE_BIN=C:\Program Files\Internet Explorer\iexplore.exe
browsers = ['Chrome', 'IE'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;