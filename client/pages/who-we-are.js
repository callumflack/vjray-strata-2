import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {
  Banner,
  Box,
  Column,
  Container,
  Flex,
  theme
} from 'rebass'
import {
  bannerHeights,
  colors,
  displayFont,
  fontWeights,
  icons
} from '../components/constants'
import {
  mike
} from '../components/words'
import {
  Overhead,
  StHeading,
  StSubhead
} from '../components/Headline'
import { StText } from '../components/Text'
import Layout from '../components/Layout'
import Block from '../components/Block'
import Footer from '../components/Footer'
import Markdown from '../components/Markdown'
// import src from 'raw-loader!../components/WHO_WE_ARE.md'



/**

  Hero

**/

const Image = styled(Banner)`
  background-repeat: no-repeat;
  min-height: calc(${bannerHeights[2]} + ${bannerHeights[0]});

  @media (min-width: 1024px) {
  }
`

const Hero = props => (
  <Image
    bg='blue'
    backgroundImage='static/img/who-cronulla.jpg'
    p={0}
    pt={bannerHeights[0]}
    w={1}
    >
    <Container
      maxWidth={1140}
      w={1}
      px={4}
      >
      <Box
        mb={5}
        w={[ 2/3, 1/2 ]}
        >
        <Overhead children='About us' />
        <StHeading
          is='h1'
          color='brandAlt'
          f={[ 6, 7 ]}
          mb={3}
          children='We believe in better Strata management for Sydney.'
        />

      </Box>
    </Container>
  </Image>
)

/**

  Text block

**/

const StyledFlex = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[5]}px;

  @media (min-width: 700px) {
    margin: 0;
  }
`

/**

  Page

**/

{/* <Header pathname={this.props.pathname} clear color='brandAlt' /> */}
{/* <Markdown children={src} /> */}

const Who = (props) => (
  <Layout>

    <Hero />

    <Block maxWidth={960}>
      <Flex
        direction={[ 'column', 'row' ]}
        mx={-3}>

        <Flex
          column
          width={[ 1, 1, 1/3, 1/4 ]}
          px={[ 5, 4 ]}>
          <Box mt='6px'>
            <img src='static/img/mike-pollard.jpg' />
          </Box>
          <StText
            color='text70'
            mt={3}
            children='Mike Pollard' />
          <StText
            color='text70'
            children='Owner' />
        </Flex>

        <StyledFlex
          order={[ '-1', 'initial' ]}
          px={4}
          width={[ 1, 1, 2/3, 3/4 ]}>
          <StText
            color='text70'
            f={[ 2, 3 ]}
            children={mike}
          />
        </StyledFlex>

      </Flex>
    </Block>

    <Block border textCenter>
      <StText children='contacts here' />
    </Block>

    <Footer />
  </Layout>
)

export default Who;