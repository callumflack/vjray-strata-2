if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const webpack = require('webpack');

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
  webpack: (cfg) => {
    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SERVER_URI': JSON.stringify(process.env.SERVER_URI),
      })
    );

    return cfg;
  },
};