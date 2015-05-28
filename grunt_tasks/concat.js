module.exports = function (grunt) {
    grunt.config('concat', {
        options: {
            stripBanners: true,
            banner: ''
        },
        build: {
            files: {
                'dist/assets/js/jumbo.js': [
                    'vendor/google-code-prettify/prettify.js',
                    'vendor/google-code-prettify/lang-css.js',
                    'src/assets/js/impress/impress.min.js',
                    'src/assets/js/impress/impress-init.min.js'
                ]
                //,'dist/index.html': ['src/html/layout/header.html', 'src/html/slides/*/*.html', 'src/html/layout/footer.html']
            }
        },
        from_watch_html: {
            files: {
                'dist/index.html': ['src/html/layout/header.html', 'src/html/slides/*/*.html', 'src/html/layout/footer.html']
            }
        },
        from_watch_js: {
            files: {
                'dist/assets/js/jumbo.js': [
                    'vendor/google-code-prettify/prettify.js',
                    'vendor/google-code-prettify/lang-css.js',
                    'src/assets/js/impress/impress.dev.js',
                    'src/assets/js/impress/impress-init.dev.js'
                ]
            }
        }
    });
};