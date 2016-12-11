const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: __dirname,
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: 'static/[name].js',
    // the filename template for entry chunks
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include

        loader: 'babel-loader',
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide

        options: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=static/fonts/[name].[ext]',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'file-loader?name=static/images/[name].[ext]',
      },
    ],
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: ['node_modules', './src'],
    // directories where to look for modules

    extensions: ['.js', '.json', '.jsx', '.css'],
    // extensions that are used
  },

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    },
  },

  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: {
    // Use external version of React
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: 'errors-only',
  // lets you precisely control what bundle information gets displayed

  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:3000',
    },
    contentBase: path.join(__dirname, 'static'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: false, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Bleve Inc',
      template: 'index_template.html', // Load a custom template (lodash by default see the FAQ for details)
      filename: 'index.html',
    }),
  ], // list of additional plugins

  /* Advanced configuration (click to show) */
}
