import styled, { css } from 'styled-components'
import {
  Text
} from 'rebass'
import {
  displayFont,
  fontWeights,
  letterSpacing,
  lineHeight
} from './constants'

// font-family: ${displayFont}-Light;
// ${theme.space[4]}px
const StText = styled(Text)`
  font-weight: 200;
  font-weight: ${fontWeights[1]};
  letter-spacing: ${letterSpacing.text};
  line-height: ${lineHeight.text};

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`

export {
  StText,
}