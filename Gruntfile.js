module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
                ' License <%= pkg.license %> */\n',
        // Task configuration.
        compass: {
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
                    /*outputStyle: 'compressed',*/
                    environment: 'development'
                }
            }
        },
        csso: {
            build: {
                options: {
                    report: 'min'
                },
                files: {
                    'assets/css/styles.css': 'assets/css/styles.css'
                }
            }
        },
        autoprefixer: {
            build: {
                files: {
                    'assets/css/styles.css': 'assets/css/styles.css'
                }
            }
        },
        cssmin: {
            build: {
                expand: true,
                src: ['**/*.dev.css'],
                ext: '.css'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            build: {
                expand: true,
                src: ['**/*.dev.js', '!*.min.js'],
                ext: '.min.js'
            },
            from_watch: {
                src: '*.dev.js',
                dest: '*.js'
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: ''
            },
            build: {
                files: {
                    'assets/js/jumbo.js': [
                        'assets/vendor/google-code-prettify/prettify.js',
                        'assets/vendor/google-code-prettify/lang-css.js',
                        'assets/js/impress/impress.min.js',
                        'assets/js/impress/impress-init.min.js'
                    ]
                    //,'index.html': ['html/layout/header.html', 'html/slides/*/*.html', 'html/layout/footer.html']
                }
            },
            from_watch_html: {
                files: {
                    'index.html': ['html/layout/header.html', 'html/slides/*/*.html', 'html/layout/footer.html']
                }
            },
            from_watch_js: {
                files: {
                    'assets/js/jumbo.js': [
                        'assets/vendor/google-code-prettify/prettify.js',
                        'assets/vendor/google-code-prettify/lang-css.js',
                        'assets/js/impress/impress.dev.js',
                        'assets/js/impress/impress-init.dev.js'
                    ]
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                unused: true,
                eqnull: true,
                latedef: true,
                newcap: true,
                nonew: true,
                trailing: true,
                evil: true,
                funcscope: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                force: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            build: {
                files: {
                    src: ['**/*.dev.js']
                }
            },
            from_watch: {
                src: '*.dev.js',
                dest: '*.js'
            }


        },
        modernizr: {
            build: {
                "devFile": "assets/vendor/modernizr/",
                "outputFile": "assets/vendor/modernizr/modernizr.min.js",
                "extra": {
                    "shiv": true,
                    "printshiv": false,
                    "load": true,
                    "mq": false,
                    "cssclasses": true
                },
                "extensibility": {
                    "addtest": false,
                    "prefixed": false,
                    "teststyles": false,
                    "testprops": false,
                    "testallprops": false,
                    "hasevents": false,
                    "prefixes": false,
                    "domprefixes": false,
                    "cssclassprefix": ""
                },
                "uglify": true,
                "tests": [],
                "parseFiles": true,
                "matchCommunityTests": false,
                "customTests": []
            }

        },
        watch: {
            options: {
                nospawn: true
            },
            sass: {
                files: ['**/*.sass'],
                tasks: ['compass:from_watch']
            },
            scss: {
                files: ['**/*.scss'],
                tasks: ['compass:from_watch']
            },
            css: {
                files: ['**/*.dev.css'],
                tasks: ['cssmin:build']
            },
            js: {
                files: ['**/*.dev.js'],
                tasks: ['jshint:from_watch', 'uglify:from_watch', 'concat:from_watch_js']
            },
            html: {
                files: ['html/**/*.html'],
                //tasks: ['concat:from_watch_html']
                tasks: ['concat_lang']
            }
        },
        concurrent: {
            css: ['compass:build', 'autoprefixer:build', 'cssmin:build', 'concat:build'],
            js: ['jshint:build', 'uglify:build'],
            options: {
                limit: 5,
                logConcurrentOutput: true
            }
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

    grunt.registerTask("concat_lang", "concate based on language", function () {

        // read all subdirectories from your modules folder
        grunt.file.expand("./html/*").forEach(function (dir) {

            // get the current concat config
            var concat = grunt.config.get('concat') || {};
            var dirName = dir.substr(dir.lastIndexOf('/')+1);
            var files = {};
            files['index' + (dirName==='en'?'':'_'+dirName) + '.html'] = [dir + '/layout/header.html', dir + '/slides/*/*.html', dir + '/layout/footer.html'];

            // set the config for this modulename-directory
            concat[dirName] = {
                files: files
            };

            // save the new concat configuration
            grunt.config.set('concat', concat);
        });
        // when finished run the concatinations
        grunt.task.run('concat');
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-modernizr");

    // Default task.
    grunt.registerTask('default', ['watch']);
    //grunt.registerTask('build', ['concurrent:css', 'concurrent:js']);
    grunt.registerTask('build', ['compass:build', 'autoprefixer:build', 'csso:build'/*, 'cssmin:build'*/, 'modernizr:build', 'jshint:build', 'uglify:build', /*'concat:build',*/ 'concat_lang']);
};

//https://www.google.pt/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&client=ubuntu#newwindow=1&qscrl=1&q=grunt+concat+dynamic_mappings
//http://stackoverflow.com/questions/21918202/using-grunt-to-concat-many-files-from-many-dirs-into-single-renamed-file-in-new