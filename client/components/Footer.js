import Link from 'next/link'
import styled, { css } from 'styled-components'
import {
  Box,
  Button,
  Column,
  Container,
  Divider,
  Flex,
  Row,
  Text,
  theme
} from 'rebass'
import {
  fontWeights,
  icons
} from './constants'
import {
  StText
} from './Text'
import Icon from './Icon'


const List = styled(Box)`
  :not(:last-child) {
    margin-right: 3rem
  }

  a {
    display: block;
    text-decoration: none;

    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  span {
    font-weight: 500;
  }
`;


const Footer = (props) => (
  <Box bg={props.bg}>
    <Container>
      <Divider color='text10' mb={3} />

      <Row justify='space-between'>
        <Column>
          <Link href='/'>
            <a><Icon color='text70' size='90' icon={ icons.logo } /></a>
          </Link>
          <StText color='text40' mx={2} my={1} children='&copy; 2017' />
        </Column>

        <Column mt={40} is='nav'>
          <Flex justify='flex-end'>
            <List is='p' color='text70'>
              <Link href='/who-we-are'><a><span>About us</span></a></Link>
              <Link href='/who-we-are'><a>Who we are</a></Link>
              <Link href='/what-we-do-for-you'><a>What we do for you</a></Link>
            </List>
            <List is='p' color='text70'>
              <Link href='/useful-info'><a><span>Useful info</span></a></Link>
              <Link href='/useful-info'><a>Strata guides</a></Link>
              <Link href='/useful-info'><a>Strata blog</a></Link>
              <Link href='/useful-info/forms-and-fact-sheets'><a>Forms and facts</a></Link>
            </List>
            <List is='p' color='text70'>
              <Link href='/contact'><a><span>Contact us</span></a></Link>
              <Link href='/fast-quote'><a>Get a fast quote</a></Link>
              <Link href='/contact'><a>Report an issue</a></Link>
              <Link href='/contact'><a>Emergencies</a></Link>
            </List>
          </Flex>

          <Flex is='span'>
            <Link href='/'><a>Terms of use</a></Link>
            <Link href='/'><a>Privacy policy</a></Link>
            <Link href='/'><a>ABN 31 064 030 311</a></Link>
          </Flex>
        </Column>
      </Row>

    </Container>
  </Box>
);

export default Footer;