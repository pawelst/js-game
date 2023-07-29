const path = require('path');

module.exports = {
    entry: './src/index.js', // the entry point of your application
    output: {
        filename: 'main.js', // the output bundled file
        path: path.resolve(__dirname, 'dist'), // the output directory
    },
    mode: 'production', // enables minification and other optimizations
};
