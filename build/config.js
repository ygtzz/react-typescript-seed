var path = require('path');
var proxy = require('./proxy');

var sBase = './src/';
module.exports = {
    sBase: sBase,
    sDist: path.resolve(__dirname, '../dist'),
    sDest: './dist',
    entry: {
        index: sBase + 'pages/index/index.jsx',
        home: sBase + 'pages/home/home.jsx'
    },
    dev: {
        proxy: proxy,
        env: '',
        port: 8889,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    pre: {
        
    },
    prod: {
        path: {
            script: 'static/scripts/',
            style: 'static/style/'
        }
    },
    build: {
        env: '',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
    }
}