import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'

import { Container } from './container'
import { Emoji } from './emoji'
import { vars } from './style-variables'
import { Text } from './typography'

const footerBackgroundColor = vars["white-bis"]

const Foot = styled.footer`
  background-color: ${footerBackgroundColor};
  padding: 3rem 1.5rem 6rem;
`

export const Footer = () => (
  <Foot>
    <Container>
    <Text alignment='center'>Copyright <Emoji symbol='©️'/> Alic Szecsei 2016–{moment().format('YYYY')}.</Text>
    <Text alignment='center'>Made with <Emoji label='love' symbol='❤️' /> using React, <Emoji symbol='💅' /> styled-components, and more.</Text>
    </Container>
    
  </Foot>
)