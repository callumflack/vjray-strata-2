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

// font-weight: ${fontWeights[1]};
const StText = styled(Text)`
  ${props => props.displayFont && css`
    font-family: ${displayFont};
  `}

  ${props => props.weight && css`
    font-weight: ${fontWeights[props.weight] || fontWeights[1]};
  `}

  ${props => props.letterSpacing && css`
    line-height: ${letterSpacing[props.letterSpacing] || letterSpacing.text};
  `}

  ${props => props.lineHeight && css`
    line-height: ${lineHeight[props.lineHeight] || lineHeight.text};
  `}

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`//`

export {
  StText
}