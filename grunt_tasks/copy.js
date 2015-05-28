module.exports = function(grunt) {
    grunt.config('copy', {
        build: {
            files: [
                {expand: true, cwd: 'src/', src: ['*'], dest: 'dist/', filter: 'isFile'},
                {expand: true, cwd: 'src/', src: ['images/**'], dest: 'dist/assets/'},
                {expand: true, cwd: 'src/', src: ['assets/images/**'], dest: 'dist/'}
            ]
        }
    });
    //grunt.loadNpmTasks('grunt-autoprefixer');
};