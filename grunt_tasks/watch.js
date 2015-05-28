module.exports = function (grunt) {
    grunt.config('watch', {
        options: {
            nospawn: true
        },
        sass: {
            files: ['src/**/*.sass'],
            tasks: ['compass:from_watch']
        },
        scss: {
            files: ['src/**/*.scss'],
            tasks: ['compass:from_watch']
        },
        css: {
            files: ['src/**/*.dev.css'],
            tasks: ['cssmin:build']
        },
        js: {
            files: ['src/**/*.dev.js'],
            tasks: ['jshint:from_watch', 'uglify:from_watch', 'concat:from_watch_js']
        },
        html: {
            files: ['src/html/**/*.html'],
            //tasks: ['concat:from_watch_html']
            tasks: ['lang']
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        if (target == "js") {
            var destFilePath = filepath.replace(/(.+)\.dev\.js$/, '$1.min.js');
            grunt.config('jshint.from_watch.src', filepath);
            grunt.config('uglify.from_watch.src', filepath);
            grunt.config('uglify.from_watch.dest', destFilePath);
        }
    });
};