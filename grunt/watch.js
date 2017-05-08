module.exports = {
    scripts: {
        files: ['src/app.ts', 'src/**/*.ts'],
        tasks: ['browserify'],
        options: {
            spawn: false,
            livereload: true
        }
    },
    html: {
        files: ['src/index.html', 'src/**/*.html'],
        tasks:['copy'],
        options: {
            spawn: false,
            livereload: true
        }
    }
};