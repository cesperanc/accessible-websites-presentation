module.exports = function (grunt) {
    grunt.config('modernizr', {
        build: {
            "devFile": "assets/vendor/modernizr/",
            "outputFile": "assets/vendor/modernizr/modernizr.min.js",
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
            "matchCommunityTests": false,
            "customTests": []
        }
    });
};