import Head from 'next/head'
import { Provider } from 'rebass'
// import theme from './theme'
import globalStyles from './global'

// https://github.com/zeit/next.js/blob/master/examples/layout-component/components/layout.js

// weights: [ 100, 200, 300, 400, 500, 700 ],

const theme = {
  breakpoints: [32, 48, 64, 80, 96],
  fontSizes: [ 12, 14, 16, 19, 23, 30, 40, 54 ],
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
  font: 'GT-Eesti-Pro-Text',
  weights: [
    200,
    500
  ]
}

export default ({ children, title = 'VJ Ray Strata, Sydney' }) => (
  <Provider theme={theme}>
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main>
        { children }
      </main>

    </div>
  </Provider>
);