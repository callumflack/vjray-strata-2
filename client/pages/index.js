import React from 'react'
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
import { displayFont } from '../components/constants'
import Layout from '../components/Layout'
import {
  Overhead,
  StyledHeading,
  StyledSubhead
} from '../components/Headline'
import {
  StText,
  StTextBook
} from '../components/Text'
import Footer from '../components/Footer'


const StyledBanner = styled(Banner)`
  min-height: 50vh;
`


const Test = (props) => (
  <Layout>

    <StyledBanner py={6}>
      <Container w={1}>
        <Column w={[ 1, 7/12 ]} mx={-3}>
          <Overhead children='Info on the go' />
          <StyledHeading is='h1' color='brand' f={[ 6, 7 ]} mb={3} children='Strata forms and fact sheets.' />
          <StyledSubhead color='text70' f={[ 4, 5 ]} mb={3} children='Everything you might need to know about your Strata management.' />
          <StText children='This is styled rebass text.' />
          <StTextBook children='This is styled rebass text, book weight.' />
          <Text bold children='This is rebass text with a bold attr themed to be weight 500.' />
        </Column>
      </Container>
    </StyledBanner>

    <Footer />
  </Layout>
)

export default Test