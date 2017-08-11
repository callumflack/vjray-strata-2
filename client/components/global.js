import { injectGlobal } from 'styled-components';
import {
  fontWeights,
  letterSpacing,
  lineHeight
} from './constants'

injectGlobal`

body { margin: 0; }

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
}

button {
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
}


button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

iframe {
  border: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

[tabindex="-1"]:focus {
  outline: none !important;
}

img {
  font-style: italic;
  max-width: 100%;
  vertical-align: middle;
}





@font-face {
  font-family: 'GT-Eesti-Pro-Text';
  font-weight: '700';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff');
  src: local('GT-Eesti-Pro-Text-Bold'), local('GT-Eesti-Pro-Text-Bold'),
       url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text';
  font-weight: '500';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff');
  src: local('GT-Eesti-Pro-Text-Medium'), local('GT-Eesti-Pro-Text-Medium'),
       url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text';
  font-weight: '400';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff');
  src: local('GT-Eesti-Pro-Text-Regular'), local('GT-Eesti-Pro-Text-Regular'),
       url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text';
  font-weight: '300';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Text-Book.woff');
  src: local('GT-Eesti-Pro-Text-Book'), local('GT-Eesti-Pro-Text-Book'),
       url('/static/fonts/GT-Eesti-Pro-Text-Book.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text';
  font-weight: '200';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Text-Light.woff');
  src: local('GT-Eesti-Pro-Text-Light'), local('GT-Eesti-Pro-Text-Light'),
       url('/static/fonts/GT-Eesti-Pro-Text-Light.woff') format('woff');
}





@font-face {
  font-family: 'GT-Eesti-Pro-Display';
  font-weight: '500';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff');
  src: local('GT-Eesti-Pro-Display-Medium'),
       url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Display';
  font-weight: '400';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Display-Regular.woff');
  src: local('GT-Eesti-Pro-Display-Regular'),
       url('/static/fonts/GT-Eesti-Pro-Display-Regular.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Display';
  font-weight: '200';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Display-Light.woff');
  src: local('GT-Eesti-Pro-Display-Light'),
       url('/static/fonts/GT-Eesti-Pro-Display-Light.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Display';
  font-weight: '100';
  font-style: normal;
  src: url('/static/fonts/GT-Eesti-Pro-Display-Thin.woff');
  src: local('GT-Eesti-Pro-Display-Thin'),
       url('/static/fonts/GT-Eesti-Pro-Display-Thin.woff') format('woff');
}





body {
  font-family: 'GT-Eesti-Pro-Text';
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  font-weight: inherit;
  font-weight: ${fontWeights[1]};
  letter-spacing: ${letterSpacing.text};
  line-height: ${lineHeight.text};
  margin: 0;
}

p a {
  text-decoration: underline;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  letter-spacing: inherit;
}

`;