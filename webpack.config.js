const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        include: [path.resolve(process.cwd(), 'src')],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
const devConfig = {
  mode: 'development',
}
const prodConfig = {}

if (process.env.NODE_ENV === 'development') {
  config = merge(config, devConfig)
} else {
  config = merge(config, prodConfig)
}

module.exports = config
