module.exports = function (grunt) {
    grunt.config('cssmin', {
        build: {
            expand: true,
            src: ['**/*.dev.css'],
            ext: '.css'
        }
    });
};