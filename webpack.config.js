const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';

let plugins=[], prodPlugins, devPlugins;

// production only
if(!devMode){
  prodPlugins = [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
      // if splitting styles across scripts  
      // chunkFilename: "[id].css",
      // filename: chunkData => chunkData.chunk.name === "script" ? "style.bundle.css" : "[name].bundle.css"
    }),
  ]

  plugins.push(...prodPlugins)
} else {
  devPlugins = [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "./src/template.html"
    })
  ]
  plugins.push(...devPlugins)
}


module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js",
      
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    //should only run on production
    minimize: !devMode,
    minimizer: [
          new TerserPlugin({
              test: /\.js(\?.*)?$/i,
          }),
          // new OptimizeCSSAssetsPlugin({
          //     cssProcessorOptions: {
          //         map: {
          //             inline: false,
          //             annotation: true
          //         }
          //     }
          // })
      ]
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                      plugins: [
                          // "@babel/plugin-proposal-class-properties"
                      ],
                    }
                },
                "eslint-loader"
            ]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [autoprefixer()]
                    }
                  },
                },
                "sass-loader"
            ]
        }
    ]
},
  plugins: plugins,
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverpublicpath-
    publicPath: '/',
    contentBase: './dist',
    // hot: true,
    port: 3000,
    host: 'localhost'
  },
  devtool: "cheap-module-source-map",
  // don't bundle with webpack, use alternative version above in dom
  externals: {
      // jquery: "jQuery",
      // lodash: "lodash",
  }
};

