module.exports = function (grunt) {
    grunt.config('cssmin', {
        build: {
            expand: true,
            src: ['src/**/*.dev.css'],
            ext: '.css'
        }
    });
};