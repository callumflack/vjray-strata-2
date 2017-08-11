'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rebass = require('rebass');

var _constants = require('./constants');

var _Text = require('./Text');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sticktoitiveness/REPOS/vjray-strata-2/client/components/Footer.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  :not(:last-child) {\n    margin-right: 3rem\n  }\n\n  a {\n    display: block;\n    text-decoration: none;\n\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n  }\n\n  span {\n    font-weight: ', ';\n    font-weight: ', ';\n  }\n'], ['\n  :not(:last-child) {\n    margin-right: 3rem\n  }\n\n  a {\n    display: block;\n    text-decoration: none;\n\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n  }\n\n  span {\n    font-weight: ', ';\n    font-weight: ', ';\n  }\n']);

var List = (0, _styledComponents2.default)(_rebass.Box)(_templateObject, _constants.fontWeights[4], _constants.fontWeights[5]);

var Footer = function Footer(props) {
  return _react2.default.createElement(_rebass.Box, { bg: props.bg, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(_rebass.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(_rebass.Divider, { color: 'text10', mb: 3, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement(_rebass.Row, { justify: 'space-between', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_rebass.Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_Icon2.default, { color: 'text70', size: '90', icon: _constants.icons.logo, __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }))), _react2.default.createElement(_Text.StText, { color: 'text40', mx: 2, my: 1, children: '\xA9 2017', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  })), _react2.default.createElement(_rebass.Column, { mt: 40, is: 'nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, _react2.default.createElement(_rebass.Flex, { justify: 'flex-end', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(List, { is: 'p', color: 'text70', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement(_link2.default, { href: '/who-we-are', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'Who we are'))), _react2.default.createElement(_link2.default, { href: '/who-we-are', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, 'Our story'))), _react2.default.createElement(List, { is: 'p', color: 'text70', __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, 'What we do for you'))), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, 'For tenants')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'For owners')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'For investors'))), _react2.default.createElement(List, { is: 'p', color: 'text70', __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(_link2.default, { href: '/useful-info', __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, 'Useful info'))), _react2.default.createElement(_link2.default, { href: '/useful-info', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, 'Strata guides')), _react2.default.createElement(_link2.default, { href: '/useful-info', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'Strata blog')), _react2.default.createElement(_link2.default, { href: '/useful-info/forms-and-fact-sheets', __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, 'Forms and facts'))), _react2.default.createElement(List, { is: 'p', color: 'text70', __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, 'Contact us'))), _react2.default.createElement(_link2.default, { href: '/fast-quote', __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, 'Get a fast quote')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, 'Report an issue')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, 'Emergencies')))), _react2.default.createElement(_rebass.Flex, { is: 'span', __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, 'Terms of use')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, 'Privacy policy')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, 'ABN 31 064 030 311')))))));
};

exports.default = Footer;