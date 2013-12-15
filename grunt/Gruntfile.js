module.exports = function (grunt) {
 
                'use strict';
 
                // Load the task from NPM
                grunt.loadNpmTasks('grunt-jslint');
 
                // Configure the task
                grunt.initConfig({
                               jslint: {
                                               // lint your project's client code
                                               client: {
                                                               src: [
                                                                              'js/**/*.js'
                                                               ],
                                                               directives: {
                                                                              browser: true,
                                                                              sloppy: false,
                                                                              todo: false
                                                               },
                                                               options: {
                                                                              log: 'out/server-lint.log',
                                                                              errorsOnly: true,
                                                                              failOnError: false
                                                               }
                                               }
                               }
                });
 
                // Register the jslint task as default (no need to type "grunt jslint")
                grunt.registerTask('default', 'jslint');
};
