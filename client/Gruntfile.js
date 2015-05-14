/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {

    // -- Plugins --------------------------------------------------------------

    // Uncomment the next line to report the Grunt execution time (for optimization, etc)
    // require('time-grunt')(grunt);

    // Intelligently lazy-loads tasks and plugins as needed at runtime.
    require('jit-grunt')(grunt, { versioncheck: 'grunt-version-check' })({ customTasksDir: 'tools/tasks' });


    grunt.initConfig({
        pkg: require('./package.json'),

        env: require('./build-env'),

        clean: {
            dest: ['<%= env.DIR_DEST %>'],
            docs: ['<%= env.DIR_DOCS %>'],
            tmp: ['<%= env.DIR_TMP %>'],
            installed: [
                '<%= env.DIR_BOWER %>',
                '<%= env.DIR_NPM %>'
            ]
        },

        watch: {
            options: {
                livereload: {
                    port: 35729
                }
            },
            watchVendor: {
                files: ['<%= env.DIR_BOWER %>/**/*'],
                tasks: [
                    'buildScripts',
                    'buildStyles'
                ]
            },
            watchMarkup: {
                files: ['<%= env.DIR_SRC %>/**/*.html'],
                tasks: ['buildMarkup']
            },
            watchStatic: {
                files: [
                    '<%= env.DIR_SRC %>/**/.htaccess',
                    '<%= env.DIR_SRC %>/**/*.{php,rb,py,jsp,asp,aspx,cshtml,txt}',
                    '<%= env.DIR_SRC %>/assets/media/**',
                ],
                tasks: ['buildStatic']
            },
            watchStyles: {
                files: ['<%= env.DIR_SRC %>/assets/scss/**/*'],
                tasks: ['buildStyles']
            },
            watchScripts: {
                files: ['<%= env.DIR_SRC %>/assets/scripts/**/*'],
                tasks: ['buildScripts']
            }
        }
    });

    // Tasks
    grunt.registerTask('default',
        grunt.option('dev') ? ['build'] :
        grunt.option('stage') ? ['build'] :
        grunt.option('prod') ? ['build', 'docs'] : []
    );

    grunt.registerTask('build', [
        'buildMarkup',
        'buildStatic',
        'buildStyles',
        'buildScripts',
        'clean:tmp'
    ]);

    grunt.registerTask('docs', [
        //'clean:docs',
        //'docScripts',
        //'clean:tmp'
    ]);

    grunt.loadNpmTasks('grunt-contrib-watch');
};