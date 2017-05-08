module.exports = function (grunt) {
    'use strict';

    var config = require('load-grunt-config')(grunt);
    grunt.initConfig(config);

    grunt.registerTask('build', ['tslint', 'browserify', 'copy', 'connect:server', 'watch']);
};