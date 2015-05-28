module.exports = function(grunt) {
    grunt.config('csso', {
        build: {
            options: {
                report: 'min'
            },
            files: {
                'dist/assets/css/styles.css': 'dist/assets/css/styles.css'
            }
        }
    });
};