module.exports = function(grunt) {
    grunt.config('csso', {
        build: {
            options: {
                report: 'min'
            },
            files: {
                'assets/css/styles.css': 'assets/css/styles.css'
            }
        }
    });
};