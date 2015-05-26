module.exports = function (grunt) {
    grunt.config('jshint', {
        options: {
            curly: true,
            unused: true,
            eqnull: true,
            latedef: true,
            newcap: true,
            nonew: true,
            trailing: true,
            evil: true,
            funcscope: true,
            noarg: true,
            sub: true,
            undef: true,
            boss: true,
            force: true,
            browser: true,
            globals: {
                jQuery: true
            }
        },
        build: {
            files: {
                src: ['**/*.dev.js']
            }
        },
        from_watch: {
            src: '*.dev.js',
            dest: '*.js'
        }
    });
};