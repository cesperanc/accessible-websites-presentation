module.exports = function (grunt) {
    grunt.config('concurrent', {
        css: ['compass:build', 'autoprefixer:build', 'cssmin:build', 'concat:build'],
        js: ['jshint:build', 'uglify:build'],
        options: {
            limit: 5,
            logConcurrentOutput: true
        }
    });
};