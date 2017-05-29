module.exports = {
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true
      },
      files: [{
        expand: true,
        cwd: 'src',
        src: '**/*.html',
        dest: 'dist/'
      }]
    },
};
