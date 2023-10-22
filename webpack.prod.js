const { merge } = require('webpack-merge');
// eslint-disable-next-line prefer-destructuring
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
// eslint-disable-next-line prefer-destructuring
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');
const ImageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'assets/css/[hash].css' }),
    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /.*\.css$/,
          attributes: { as: 'style', type: 'text/css' }
        }
      ]
    }),
    new WebpackPwaManifest({
      name: 'RestaurantApps',
      short_name: 'RestauApps',
      description: 'Restaurant apps for your quality time with family',
      start_url: './index.html',
      background_color: '#FFFFFF',
      theme_color: '#252A34',
      display: 'standalone',
      orientation: 'any',
      publicPath: './',
      filename: 'manifest',
      ios: true,
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icons/logo_128.png'),
          size: 128,
          destination: 'assets/icons',
          ios: true
        },
        {
          src: path.resolve(__dirname, 'src/public/icons/logo_512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'assets/icons',
          purpose: 'any maskable'
        }
      ]
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js'
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50
          }
        }
      ],
      overrideExtension: true
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true
        })
      ]
    })
  ],
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin({
        minify: [
          CssMinimizerPlugin.cssnanoMinify,
          CssMinimizerPlugin.cssoMinify,
          CssMinimizerPlugin.cleanCssMinify
        ],
        minimizerOptions: {
          preset: ['advanced']
        }
      })
    ]
  }
});
