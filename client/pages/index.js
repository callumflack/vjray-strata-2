import React from 'react'
import Link from 'next/link';
import gql from 'graphql-tag'
// import apollo from '../../lib/apollo'
import styled from 'styled-components'
import {
  Banner,
  Box,
  Column,
  Container,
  Flex,
  Heading,
  Subhead,
  Text,
  theme,
} from 'rebass'
import {
  bannerHeights,
  colors,
  displayFont
} from '../components/constants'
import Layout from '../components/Layout'
import {
  Overhead,
  StHeading,
  StSubhead
} from '../components/Headline'
import { StText } from '../components/Text'
import Footer from '../components/Footer'





const StyledBanner = styled(Banner)`
  min-height: ${bannerHeights[1]};
`

const ListItemRoot = styled(Box)`
  border-bottom: 1px solid ${colors.text10};

  &:first-child {
    padding-top: 0;
  }
`;

const ListItem = props => (
  <ListItemRoot py={3}>
    <Flex
      align={[ 'flex-start', 'flex-end' ]}
      direction={[ 'column', 'row' ]}>
      <Link href='#'>
        <a>
          <StText
            is='span'
            color='text'
            displayFont
            fontSize={[ 4, 5 ]}
            mr={3}>
            {props.headline}
          </StText>
          <StText
            is='span'
            color='text70'
            fontSize={[ 3, 4 ]}>
            {props.subheadline}
          </StText>
        </a>
      </Link>
    </Flex>
  </ListItemRoot>
);

const Home = (props) => (
  <Layout>
    <StyledBanner py={7}>
      <Container w={1}>
        <Box w={[ 1, 7/12 ]}>
          <Overhead children='Info on the go' />
          <StHeading is='h1' color='brand' f={[ 6, 7 ]} mb={4} children='Strata forms and fact sheets.' />
          <StSubhead color='text70' f={[ 4, 5 ]} mb={4} children='Readily available PDF downloads to help your Strata management.' />
        </Box>
      </Container>
    </StyledBanner>

    <Container>
      <Overhead color='text' children='Forms' />
      <ListItem
        headline='Proxy nomination'
        subheadline='Nominate your proxy options'
      />
    </Container>

    <Footer />
  </Layout>
)

export default Home