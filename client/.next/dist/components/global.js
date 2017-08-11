'use strict';

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\nbody { margin: 0; }\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  padding: 0;\n}\n\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\niframe {\n  border: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n[tabindex="-1"]:focus {\n  outline: none !important;\n}\n\nimg {\n  font-style: italic;\n  max-width: 100%;\n  vertical-align: middle;\n}\n\n\n\n\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'700\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Bold.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Bold\'), local(\'GT-Eesti-Pro-Text-Bold\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Bold.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'500\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Medium.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Medium\'), local(\'GT-Eesti-Pro-Text-Medium\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Medium.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'400\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Regular.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Regular\'), local(\'GT-Eesti-Pro-Text-Regular\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Regular.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'300\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Book.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Book\'), local(\'GT-Eesti-Pro-Text-Book\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Book.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'200\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Light.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Light\'), local(\'GT-Eesti-Pro-Text-Light\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Light.woff\') format(\'woff\');\n}\n\n\n\n\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'500\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Medium.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Medium\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Medium.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'400\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Regular.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Regular\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Regular.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'200\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Light.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Light\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Light.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'100\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Thin.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Thin\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Thin.woff\') format(\'woff\');\n}\n\n\n\n\n\nbody {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 200;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\np {\n  font-weight: inherit;\n  font-weight: ', ';\n  letter-spacing: ', ';\n  line-height: ', ';\n  margin: 0;\n}\n\np a {\n  text-decoration: underline;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: inherit;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  letter-spacing: inherit;\n}\n\n'], ['\n\nbody { margin: 0; }\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  padding: 0;\n}\n\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\niframe {\n  border: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n[tabindex="-1"]:focus {\n  outline: none !important;\n}\n\nimg {\n  font-style: italic;\n  max-width: 100%;\n  vertical-align: middle;\n}\n\n\n\n\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'700\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Bold.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Bold\'), local(\'GT-Eesti-Pro-Text-Bold\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Bold.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'500\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Medium.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Medium\'), local(\'GT-Eesti-Pro-Text-Medium\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Medium.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'400\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Regular.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Regular\'), local(\'GT-Eesti-Pro-Text-Regular\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Regular.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'300\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Book.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Book\'), local(\'GT-Eesti-Pro-Text-Book\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Book.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-weight: \'200\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Text-Light.woff\');\n  src: local(\'GT-Eesti-Pro-Text-Light\'), local(\'GT-Eesti-Pro-Text-Light\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Text-Light.woff\') format(\'woff\');\n}\n\n\n\n\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'500\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Medium.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Medium\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Medium.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'400\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Regular.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Regular\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Regular.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'200\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Light.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Light\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Light.woff\') format(\'woff\');\n}\n\n@font-face {\n  font-family: \'GT-Eesti-Pro-Display\';\n  font-weight: \'100\';\n  font-style: normal;\n  src: url(\'/static/fonts/GT-Eesti-Pro-Display-Thin.woff\');\n  src: local(\'GT-Eesti-Pro-Display-Thin\'),\n       url(\'/static/fonts/GT-Eesti-Pro-Display-Thin.woff\') format(\'woff\');\n}\n\n\n\n\n\nbody {\n  font-family: \'GT-Eesti-Pro-Text\';\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 200;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\np {\n  font-weight: inherit;\n  font-weight: ', ';\n  letter-spacing: ', ';\n  line-height: ', ';\n  margin: 0;\n}\n\np a {\n  text-decoration: underline;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: inherit;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  letter-spacing: inherit;\n}\n\n']);

(0, _styledComponents.injectGlobal)(_templateObject, _constants.fontWeights[1], _constants.letterSpacing.text, _constants.lineHeight.text);