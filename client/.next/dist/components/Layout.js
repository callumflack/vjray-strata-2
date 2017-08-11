'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _rebass = require('rebass');

var _global = require('./global');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sticktoitiveness/REPOS/vjray-strata-2/client/components/Layout.js';
// import theme from './theme'


// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

// weights: [ 100, 200, 300, 400, 500, 700 ],

var theme = {
  breakpoints: [32, 48, 64, 80, 96],
  fontSizes: [12, 14, 16, 19, 23, 30, 40, 54],
  colors: {
    text: '#4a4a55',
    text70: '#818188',
    text40: '#b7b7bb',
    text20: '#dbdbdd',
    text10: '#ededee',
    text7: '#f2f2f3',
    brand: '#c90b50',
    brandAlt: '#404070',
    brandAlt70: '#797A9A',
    beige: '#F7F2EC',
    offBlue: '#e8f6fb',
    offWhite: '#f6f6f6',
    grey: '#EEEEF0',
    success: '#42db41',
    error: '#D91E1F'
  },
  font: 'GT-Eesti-Pro-Text'
};

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'VJ Ray Strata, Sydney' : _ref$title;
  return _react2.default.createElement(_rebass.Provider, { theme: theme, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, children)));
};