// import Link from 'next/link';
import React from 'react';
import { FaCaretRight, FaDesktop, FaGamepad, FaReact, FaRobot } from 'react-icons/fa'
import styled from 'styled-components';

import { Column, Columns } from '../components/column';
import { Container } from '../components/container';
import { HeroImage, HeroText } from '../components/hero';
import { Icon } from '../components/icon';
import Nav from '../components/navbar';
import { Project } from '../components/project'
import { Section } from '../components/section';
import { AncestorTile } from '../components/tile';
import { H1, H3, H4, Text } from '../components/typography';
import { games, otherProjects } from '../models/project';

export default () => (
  <div>
    <Nav />
    <HeroImage>
      <HeroText>
        <H1 color='white' alignment='center'>Alic Szecsei</H1>
        <H4 color='white' alignment='center'>Game Developer & Software Engineer</H4>
      </HeroText>
    </HeroImage>
    <Section id="about">
      <Container>
        <H3 alignment='center' color='black'>About Me</H3>
        <Text alignment='justify'>
          I'm Alic Szecsei, a software engineer and game developer. I'm currently a student at the
          University of Iowa, getting my Master's degree in computer science. I've been programming since
          I was 12, making simple rock-paper-scissors games in C, then writing equally-simple encryption
          algorithms on my TI-89 graphing calculator. I'm interested in game programming and graphics
          programming; merging art and computer science in bold ways, alongside interdisciplinary teams
          passionate about what they do. I'm thrilled by the opportunity to solve a problem and have a
          working piece of software to show off at the end.
        </Text>
        <Columns alignment='center'>
          <Column size={3}>
            <H1 alignment='center'><Icon><FaGamepad /></Icon></H1>
            <H4 alignment='center'>Games</H4>
            <Text>
              <Icon><FaCaretRight /></Icon> Experience in Unity, UE4<br />
              <Icon><FaCaretRight /></Icon> Developed a game designed for VR<br />
            </Text>
          </Column>
          <Column size={3}>
            <H1 alignment='center'><Icon><FaReact /></Icon></H1>
            <H4 alignment='center'>Web</H4>
            <Text alignment='justify'>
              I've made an effort to learn several web frameworks. I started with vanilla JavaScript,
              learned CoffeeScript and Rails, then progressed on to my current stack of TypeScript, React,
              and Redux. My largest project has been an IRC client using this stack with Electron. I
              also have experience with Flask, EmberJS, and Spring Boot.
            </Text>
          </Column>
          <Column size={3}>
            <H1 alignment='center'><Icon><FaRobot /></Icon></H1>
            <H4 alignment='center'>Machine Learning</H4>
          </Column>
          <Column size={3}>
            <H1 alignment='center'><Icon><FaDesktop /></Icon></H1>
            <H4 alignment='center'>Other Software</H4>
          </Column>
        </Columns>
      </Container>
    </Section>
    <Section id="games">
      <Container>
        <H3 alignment='center'>Games</H3>
        <AncestorTile>
          {games.map((value, index) => <Project key={index} projectDetails={value} />)}
        </AncestorTile>
      </Container>
    </Section>
    <Section id="projects">
      <Container>
        <H3 alignment='center'>Other Projects</H3>
        <AncestorTile>
          {otherProjects.map((value, index) => <Project key={index} projectDetails={value} />)}
        </AncestorTile>
      </Container>
    </Section>
  </div>
);
