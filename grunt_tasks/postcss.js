module.exports = function (grunt) {
    grunt.config('postcss', {
        build: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({browsers: 'last 1 version'})
                ]
            },
            files: {
                'dist/assets/css/styles.css': 'dist/assets/css/styles.css'
            }
        }
    });
    //grunt.loadNpmTasks('grunt-autoprefixer');
};