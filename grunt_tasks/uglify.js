module.exports = function (grunt) {
    grunt.config('uglify', {
        options: {
            banner: '<%= banner %>'
        },
        build: {
            expand: true,
            src: ['src/**/*.dev.js', '!*.min.js'],
            ext: '.min.js'
        },
        from_watch: {
            src: '*.dev.js',
            dest: '*.js'
        }
    });
};