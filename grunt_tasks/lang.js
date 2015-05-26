module.exports = function(grunt) {
    // read all subdirectories from our html folder
    grunt.registerTask("lang", "concate HTML files based on their directory language", function () {

        var langs = [], langsL10nLabels = {
            'en': 'English',
            'pt-PT': 'Português'
        };
        // get the current concat config
        var concat = grunt.config.get('concat') || {};
        grunt.file.expand("./html/*").forEach(function (dir) {
            var dirName = dir.substr(dir.lastIndexOf('/') + 1);
            var files = {}, file = 'index' + (dirName === 'en' ? '' : '_' + dirName) + '.html';
            langs.push({lang: dirName, file: file});
            files[file] = [dir + '/layout/header.html', dir + '/slides/*/*.html', dir + '/layout/footer.html'];

            // set the config for this modulename-directory
            concat[dirName] = {
                files: files
            };
        });
        for (var langIdx in langs) {
            concat[langs[langIdx]['lang']]['options'] = {
                'lang': langs[langIdx]['lang'],
                process: function (src, filepath) {
                    var langsLinks = "", label;
                    for (var i in langs) {
                        label = langsL10nLabels[langs[i]['lang']] || langs[i]['lang'];
                        langsLinks += '<a class="impress-tool lang-selector' + (langs[i]['lang'] === this.lang ? ' current-lang' : '') + '" hreflang="' + langs[i]['lang'] + '" href="' + langs[i]['file'] + '" lang="' + langs[i]['lang'] + '">' + label + '</a>';
                    }
                    return src.replace(/(\<\!--\[lang-toolbar\]--\>)/gi, langsLinks);
                }
            };
        }
        //grunt.log.write(JSON.stringify(concat));
        // save the new concat configuration
        grunt.config.set('concat', concat);
        // when finished run the concatinations
        grunt.task.run('concat');
    });
};