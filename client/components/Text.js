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
// font-weight: ${fontWeights[1]};
const StText = styled(Text)`
  letter-spacing: ${letterSpacing.text};
  line-height: ${lineHeight.text};

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`

const StTextBook = styled(Text)`
  font-weight: 300;
`


export {
  StText,
  StTextBook,
}