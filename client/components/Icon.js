import styled, { css } from 'styled-components'
import { Box } from 'rebass'

// https://codepen.io/sdras/pen/a3596da23d8f9463079ac57c8e3ee9f8?editors=1010
// https://github.com/zeit/next.js/tree/master/examples/svg-components
// https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
// https://github.com/jxnblk/reline
// https://github.com/jxnblk/geomicons-open

const Icon = props => (
  <IconRoot
    is='span'
    color={props.color}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      align={props.align}
      height={`${props.size}px`}
      width={`${props.size}px`}
      viewBox="0 0 100 100"
    >
      <rect fill="none" width={`${props.size}px`} height={`${props.size}px`} />
      <path
        d={props.icon}
      ></path>
    </svg>
  </IconRoot>
)

const IconRoot = styled(Box)`
  display: inline-block;
  line-height: 1;
  position: relative;
  text-align: center;

  > svg {
    fill: currentColor;
    ${props => props.align && css`
      vertical-align: ${[props.align] || 'baseline'};
    `}
  }
`

export default Icon;