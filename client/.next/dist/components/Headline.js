'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overhead = exports.StyledSubhead = exports.StyledHeading = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rebass = require('rebass');

var _constants = require('../components/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sticktoitiveness/REPOS/vjray-strata-2/client/components/Headline.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 1;\n  font-family: ', '-Regular;\n  font-weight: 400;\n'], ['\n  line-height: 1;\n  font-family: ', '-Regular;\n  font-weight: 400;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', '-Light;\n  font-weight: 200;\n  line-height: ', '\n'], ['\n  font-family: ', '-Light;\n  font-weight: 200;\n  line-height: ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  border-bottom: 1px solid currentColor;\n  display: inline-block;\n  font-family: ', '-Medium;\n  font-weight: 500;\n  letter-spacing: ', ';\n  line-height: 1;\n  text-transform: uppercase;\n'], ['\n  border-bottom: 1px solid currentColor;\n  display: inline-block;\n  font-family: ', '-Medium;\n  font-weight: 500;\n  letter-spacing: ', ';\n  line-height: 1;\n  text-transform: uppercase;\n']);

var StyledHeading = (0, _styledComponents2.default)(_rebass.Heading)(_templateObject, _constants.displayFont);

var StyledSubhead = (0, _styledComponents2.default)(_rebass.Subhead)(_templateObject2, _constants.displayFont, _constants.lineHeight.subhead);

var OverheadRoot = (0, _styledComponents2.default)(_rebass.Subhead)(_templateObject3, _constants.displayFont, _constants.letterSpacing.touch);

var Overhead = function Overhead(props) {
  return _react2.default.createElement(OverheadRoot, (0, _extends3.default)({
    is: 'h4',
    color: 'brand',
    f: [0, 1],
    pb: 2,
    mb: 3,
    ml: 1
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

exports.StyledHeading = StyledHeading;
exports.StyledSubhead = StyledSubhead;
exports.Overhead = Overhead;