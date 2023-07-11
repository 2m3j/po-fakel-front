const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
    webpack = require("webpack");

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
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
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
            filename: path.production.base + '404.html',
            template: path.src.templates + "404.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'photo-album.html',
            template: path.src.templates + 'photo-album.html',
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'photo-album-specific.html',
            template: path.src.templates + 'photo-album-specific.html',
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'audio-album.html',
            template: path.src.templates + 'audio-album.html',
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'video-album.html',
            template: path.src.templates + 'video-album.html',
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'gallery.html',
            template: path.src.templates + 'gallery.html',
            inject: true,
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
        new HtmlWebpackPlugin({
            filename: path.production.base + 'detailsPage.html',
            template: path.src.templates + "detailsPage.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'news.html',
            template: path.src.templates + "news.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'news-group.html',
            template: path.src.templates + "news-group.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.production.base + 'search.html',
            template: path.src.templates + "search.html",
            inject: true
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    ],
    devServer: {
        static: path.production.base,
    },
}
