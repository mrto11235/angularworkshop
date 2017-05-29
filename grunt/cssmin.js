module.exports = {
    target: {
      files: [{
        expand: true,
        cwd: 'src',
        src: '**/*.css',
        dest: 'dist/',
        ext: '.min.css'
      }]
    }
};
