'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StText = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rebass = require('rebass');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: 200;\n  font-weight: ', ';\n  letter-spacing: ', ';\n  line-height: ', ';\n\n  ', '\n'], ['\n  font-weight: 200;\n  font-weight: ', ';\n  letter-spacing: ', ';\n  line-height: ', ';\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    text-transform: uppercase;\n  '], ['\n    text-transform: uppercase;\n  ']);

// font-family: ${displayFont}-Light;
// ${theme.space[4]}px
var StText = (0, _styledComponents2.default)(_rebass.Text)(_templateObject, _constants.fontWeights[1], _constants.letterSpacing.text, _constants.lineHeight.text, function (props) {
  return props.uppercase && (0, _styledComponents.css)(_templateObject2);
});

exports.StText = StText;