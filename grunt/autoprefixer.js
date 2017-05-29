module.exports = {
    dist: {
      files: [{
                  expand: true,
                  cwd: 'dist/css',
                  src: '*.min.css',
                  dest: 'dist/css'
              }]
    }
};
