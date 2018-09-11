// import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Container } from '../components/container';
import { HeroImage, HeroText } from '../components/hero';
import Nav from '../components/navbar';
import { Section } from '../components/section';
import { H1, H3, H4, Text } from '../components/typography';

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
    <Container>
      <Section size='medium'>
        <H3 color='black'>About Me</H3>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim, justo quis semper finibus, libero libero luctus odio, vel malesuada velit tortor ac felis. Maecenas in viverra ante. Maecenas ultricies est posuere massa scelerisque sagittis. Phasellus lectus turpis, rutrum non lectus eget, laoreet ultricies nulla. Duis nec massa at risus tincidunt aliquam sollicitudin ut risus. Aliquam luctus metus a gravida tristique. Pellentesque euismod nibh eget aliquet laoreet. Morbi mauris massa, rutrum sed massa at, dictum gravida dolor. Ut vehicula erat sit amet facilisis tincidunt. Nulla convallis dui non ipsum pellentesque, mattis congue diam mattis. Nunc nec nibh consectetur, fringilla enim ut, sagittis est. Aenean eget sem mollis, varius sem quis, viverra tellus. In eget mollis leo, nec varius lectus. Nunc sit amet justo id ligula consequat volutpat. Nam dictum quam vel egestas lobortis.</Text>
        <Text>Suspendisse urna nisl, iaculis ut commodo at, varius quis turpis. Suspendisse maximus magna et maximus placerat. Praesent finibus dignissim feugiat. Fusce varius vel urna et sagittis. In ac imperdiet diam, nec ultricies sapien. Nulla ut condimentum libero. Curabitur sodales tortor a tellus suscipit hendrerit. Donec ut metus sed nulla sollicitudin maximus. Mauris finibus varius maximus. Fusce tristique turpis a nulla mattis, quis tristique sem malesuada. Donec rhoncus est nec metus faucibus blandit. Maecenas elementum tincidunt pulvinar. Integer venenatis magna rhoncus purus imperdiet, nec condimentum arcu tempor. Vivamus consectetur augue elit, in rhoncus nisl pharetra lacinia.</Text>
      </Section>
    </Container>
  </Wrapper>
);
