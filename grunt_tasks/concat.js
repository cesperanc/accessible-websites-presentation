module.exports = function (grunt) {
    grunt.config('concat', {
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
    });
};