import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import {
  Banner,
  Box,
  Column,
  Container,
  Flex,
  Heading,
  Subhead
} from 'rebass'

import {
  bannerHeights,
  colors,
  displayFont,
  fontWeights,
  icons
} from '../components/constants'
import {
  servicesIntro,
  servicesList
} from '../components/words'

import {
  Overhead,
  StHeading,
  StSubhead
} from '../components/Headline'
import { StText } from '../components/Text'
import Layout from '../components/Layout'
import Block from '../components/Block'
import Icon from '../components/Icon'
import Footer from '../components/Footer'


/**

  Hero

**/

const Color = styled(Box)`
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${colors.beige} 70%
    );
`

const Image = styled(Banner)`
  background-position: 30% 100%;
  background-repeat: no-repeat;
  min-height: calc(${bannerHeights[1]} + ${bannerHeights[0]});

  @media (min-width: 1024px) {
    background-position: 100% 100%;
  }

  @media (min-width: 1280px) {
    background-size: contain !important;
    background-position: 85% 100%;
  }

  @media (min-width: 1536px) {
    background-position: 66% 100%;
  }
`

{/* <LineBreak>for you.</LineBreak> */}

const Hero = props => (
  <Color p={0}>
    <Image
      backgroundImage='static/img/what-hero.png'
      p={0}
      pt={bannerHeights[0]}
      w={1}
      >
      <Container
        maxWidth={960}
        w={1}
        px={4}
        >
        <Box
          mb={5}
          w={[ 2/3, 1/2 ]}
          >
          <Overhead children='Our services' />
          <StHeading
            is='h1'
            color='brand'
            f={[ 6, 7 ]}
            mb={3}
            w={[ 1, 7/12 ]}
            children='What we do for you.'
          />
          <StSubhead
            color='text70'
            f={[ 4, 5 ]}
            w={[ 1, 7/12 ]}
            children='We help you get peace of mind.'
          />
        </Box>
      </Container>
    </Image>
  </Color>
)

/**

  List

**/

const ItemRoot = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`

const ItemIcon = styled(Icon)`
  transform: translateY(-20px);
`

const Item = (props) => (
  <Flex
    direction={[ 'column', 'row' ]}
    mx={-3}
    mb={5}>
    <Box px={3}>
      <ItemIcon
        color='brand'
        size='100'
        icon={icons[props.item.icon]}
      />
    </Box>
    <Box px={3}>
      <StText
        color='brand'
        displayFont
        f={[ 4, 5 ]}
        mb={1}
        weight='4'
        children={props.item.headline}
      />
      <StText
        color='text70'
        f={[ 2, 3 ]}
        >
        {props.item.text}
        {props.item.link &&
          <Link href="#"><a>Find out more</a></Link>
        }
      </StText>
    </Box>
  </Flex>
)

/**

  Page

**/

const What = (props) => (
  <Layout>
    <Hero />
    <Block maxWidth={700}>
      <StText
        color='text70'
        f={[ 4, 5 ]}
        lineHeight='subhead'
        mb={[ 5, 6]}
        children={servicesIntro}
      />
      {servicesList.map((item, i) =>
        <Item item={item} key={i} />
      )}
    </Block>
    <Footer />
  </Layout>
)

export default What