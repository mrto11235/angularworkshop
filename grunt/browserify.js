module.exports = {
        main: {
            files: {
                'dist/js/bundle.js': ['src/app.ts']
            },
            options: {
                plugin: ['tsify']
            }
        }

};