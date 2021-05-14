const path = require('path')

module.exports = {
    entry: ['./js/index.js', './js/ajax.js', './js/calculator.js'],
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bund')
    }
}
