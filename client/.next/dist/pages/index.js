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

var _constants = require('../components/constants');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Headline = require('../components/Headline');

var _Text = require('../components/Text');

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sticktoitiveness/REPOS/vjray-strata-2/client/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  min-height: 50vh;\n'], ['\n  min-height: 50vh;\n']);

var StyledBanner = (0, _styledComponents2.default)(_rebass.Banner)(_templateObject);

var Test = function Test(props) {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(StyledBanner, { py: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_rebass.Container, { w: 1, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_rebass.Column, { w: [1, 7 / 12], mx: -3, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_Headline.Overhead, { children: 'Info on the go', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement(_Headline.StyledHeading, { is: 'h1', color: 'brand', f: [6, 7], mb: 3, children: 'Strata forms and fact sheets.', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement(_Headline.StyledSubhead, { color: 'text70', f: [4, 5], children: 'Everything you might need to know about your Strata management.', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement(_Text.StText, { fontWeight: 2, weight: 2, children: 'This is styled rebass text.', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement(_rebass.Text, { fontWeight: 2, weight: 2, children: 'This is just rebass text.', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })))), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }));
};

exports.default = Test;