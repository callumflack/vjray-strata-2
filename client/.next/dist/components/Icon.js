'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rebass = require('rebass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sticktoitiveness/REPOS/vjray-strata-2/client/components/Icon.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  text-align: center;\n\n  > svg {\n    fill: currentColor;\n    ', '\n  }\n'], ['\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  text-align: center;\n\n  > svg {\n    fill: currentColor;\n    ', '\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      vertical-align: ', ';\n    '], ['\n      vertical-align: ', ';\n    ']);

// https://codepen.io/sdras/pen/a3596da23d8f9463079ac57c8e3ee9f8?editors=1010
// https://github.com/zeit/next.js/tree/master/examples/svg-components
// https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
// https://github.com/jxnblk/reline
// https://github.com/jxnblk/geomicons-open

var Icon = function Icon(props) {
  return _react2.default.createElement(IconRoot, {
    is: 'span',
    color: props.color, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    align: props.align,
    height: props.size + 'px',
    width: props.size + 'px',
    viewBox: '0 0 100 100',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('rect', { fill: 'none', width: props.size + 'px', height: props.size + 'px', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('path', {
    d: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
};

var IconRoot = (0, _styledComponents2.default)(_rebass.Box)(_templateObject, function (props) {
  return props.align && (0, _styledComponents.css)(_templateObject2, [props.align] || 'baseline');
});

exports.default = Icon;