import {
  Container
} from 'rebass'

const Block = props =>
  <Container
    my={[ 5, 6 ]}
    px={4}
    maxWidth={props.maxWidth || 1024}
    {...props}
  />

export default Block