module.exports = function (grunt) {
    'use strict';

    var config = require('load-grunt-config')(grunt);

    grunt.initConfig(config);
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('build', ['tslint', 'browserify', 'copy', 'htmlmin', 'cssmin', 'autoprefixer', 'connect:server', 'watch']);
};
