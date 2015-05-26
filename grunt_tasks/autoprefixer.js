module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        build: {
            files: {
                'assets/css/styles.css': 'assets/css/styles.css'
            }
        }
    });
    //grunt.loadNpmTasks('grunt-autoprefixer');
};