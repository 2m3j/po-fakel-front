const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = {
    src: {
        blocks: 'assets/blocks',
        js: __dirname + '/src/js/',
        scss: __dirname + '/src/scss/',
        templates: __dirname + '/src/templates/',
    },
    production: {
        base: __dirname + '/www/',
    }
};


module.exports = {
    mode: 'development',
    entry: {
        app: [path.src.js + 'app.js', path.src.scss + 'app.scss'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    compact: false,
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader", options: {url: false}},
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
        ],
    },
    output: {
        path: path.production.base,
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'index.html',
            template: path.src.templates + "index.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'about.html',
            template: path.src.templates + "about.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'contacts.html',
            template: path.src.templates + "contacts.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'names.html',
            template: path.src.templates + "names.html",
            inject: true
        }),
    ],
    devServer: {
        static: path.production.base,
    },
}
