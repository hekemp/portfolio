// import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Container } from '../components/container';
import { HeroImage, HeroText } from '../components/hero';
import Nav from '../components/navbar';
import { H1, H4 } from '../components/typography';

const Wrapper = styled.div`
  height: 100vh;
`;

export default () => (
  <Wrapper>
    <Nav />
    <HeroImage>
      <HeroText>
        <H1>Alic Szecsei</H1>
        <H4>Game Developer & Software Engineer</H4>
      </HeroText>
    </HeroImage>
  </Wrapper>
);
