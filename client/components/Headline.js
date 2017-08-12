import styled, { css } from 'styled-components'
import {
  Heading,
  Subhead,
} from 'rebass'
import {
  displayFont,
  letterSpacing,
  lineHeight
} from '../components/constants'


const StyledHeading = styled(Heading)`
  line-height: 1;
  font-family: ${displayFont};
  font-weight: 400;
`

const StyledSubhead = styled(Subhead)`
  font-family: ${displayFont};
  font-weight: 200;
  line-height: ${lineHeight.subhead}
`

const OverheadRoot = styled(Subhead)`
  border-bottom: 1px solid currentColor;
  display: inline-block;
  font-family: ${displayFont};
  font-weight: 500;
  letter-spacing: ${letterSpacing.touch};
  line-height: 1;
  text-transform: uppercase;
`

const Overhead = props =>
  <OverheadRoot
    is='h4'
    color='brand'
    f={[ 0, 1 ]}
    pb={2}
    mb={3}
    ml={1}
    {...props}
  />

export {
  StyledHeading,
  StyledSubhead,
  Overhead
}