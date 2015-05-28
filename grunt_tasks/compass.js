module.exports = function(grunt) {
    grunt.config('compass', {
        build: {
            options: {
                sassDir: 'src/assets/css/scss',
                cssDir: 'dist/assets/css',
                outputStyle: 'compressed',
                environment: 'production'
            }
        },
        from_watch: {
            options: {
                sassDir: 'src/assets/css/scss',
                cssDir: 'dist/assets/css',
                environment: 'development'
            }
        }
    });
};