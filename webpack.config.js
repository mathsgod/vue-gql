const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/vue-gql.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "vue-gql.js",
        path: path.resolve(__dirname, 'dist')
    }, target: "web"
};