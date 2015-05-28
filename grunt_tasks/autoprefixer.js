module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        build: {
            files: {
                'dist/assets/css/styles.css': 'dist/assets/css/styles.css'
            }
        }
    });
    //grunt.loadNpmTasks('grunt-autoprefixer');
};