module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
                ' License <%= pkg.license %> */\n'
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('grunt_tasks');

    // Default task.
    grunt.registerTask('default', ['watch']);
    //grunt.registerTask('build', ['concurrent:css', 'concurrent:js']);
    grunt.registerTask('build', ['compass:build', 'autoprefixer:build', 'csso:build'/*, 'cssmin:build'*/, 'modernizr:build', 'jshint:build', 'uglify:build', /*'concat:build',*/ 'lang', 'copy:build']);
};