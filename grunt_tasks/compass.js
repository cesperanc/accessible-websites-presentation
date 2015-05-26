module.exports = function(grunt) {
    grunt.config('compass', {
        build: {
            options: {
                sassDir: 'assets/css/scss',
                cssDir: 'assets/css',
                outputStyle: 'compressed',
                environment: 'production'
            }
        },
        from_watch: {
            options: {
                sassDir: 'assets/css/scss',
                cssDir: 'assets/css',
                environment: 'development'
            }
        }
    });
};