const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/vue-gql.js",
    //watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        filename: "vue-gql.js",
        path: path.resolve(__dirname, 'dist')
    }, target: "web"
};