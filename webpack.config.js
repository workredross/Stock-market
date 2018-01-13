var webpack = require('webpack');
  module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      './public/app.js'
    ],
    externals:{
      jquery:'jQuery'
    },
    plugins:[
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      root:__dirname,
      alias: {
        DisplayGraph: 'public/components/DisplayGraph.jsx',
        Input: 'public/components/Input.jsx',
        AlphaAPI:'public/API/AlphaAPI.jsx',
        ChartData:'public/components/ChartData.jsx'
      },
      extension: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      }
    ]

  }
};
