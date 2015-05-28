module.exports = function (grunt) {
    grunt.config('modernizr', {
        build: {
            "devFile": "vendor/modernizr/modernizr-dev.js",
            "outputFile": "dist/assets/vendor/modernizr/modernizr.min.js",
            "extra": {
                "shiv": true,
                "printshiv": false,
                "load": true,
                "mq": false,
                "cssclasses": true
            },
            "extensibility": {
                "addtest": false,
                "prefixed": false,
                "teststyles": false,
                "testprops": false,
                "testallprops": false,
                "hasevents": false,
                "prefixes": false,
                "domprefixes": false,
                "cssclassprefix": ""
            },
            "uglify": true,
            "tests": [],
            "parseFiles": true,
            "files" : {
                "src": [
                    "src/**/*.js",
                    "!src/**/*.dev.js",
                    'src/**/*.{scss,sass}',
                    'src/**/*.css'
                ]
            },
            "matchCommunityTests": false,
            "customTests": []
        }
    });
};