var matchdep = require('matchdep');

module.exports = function(grunt) {
  'use strict';

  matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    prj: {
      src: 'src',
      build: 'build',
      buildTemplates: 'build_templates',
      test: 'test',
      vendor: 'bower_components',
      lib: 'lib',
      jsPattern: '**/*.js',
      files: {
        src: ['<%= prj.src %>/<%= prj.jsPattern %>'],
        srcTest: ['<%= prj.test %>/<%= prj.jsPattern %>']
      },
      dependencies: [
        '<%= prj.vendor %>/angular/angular.min.js',
        '<%= prj.lib %>/forge.min.js'
      ],
      devDependencies: [
        '<%= prj.vendor %>/angular-mocks/angular-mocks.js'
      ],
      js: {
        src: '<%= prj.src %>',
        build: '<%= prj.build %>/scripts'
      }
    },

    /* build tasks */
    clean: {
      build: ['<%= prj.build %>']
    },

    karma: {
      options: {
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher'
        ],

        singleRun: true
      },
      build: {
          files: {
              src: [
                  '<%= prj.dependencies %>',
                  '<%= prj.devDependencies %>',
                  '<%= prj.files.src %>',

                  '<%= prj.files.srcTest %>'
              ]
          }
      }
    }

  });

  grunt.registerTask('build', [
    'clean',
    'karma:build'
  ]);


  grunt.registerTask('default', ['build']);


};
