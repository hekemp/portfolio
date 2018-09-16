// import Link from 'next/link';
import React from 'react';
import { FaDesktop, FaGamepad, FaReact, FaRobot } from 'react-icons/fa'

import { Column, Columns } from '../components/column';
import { Container } from '../components/container';
import { HeroImage, HeroText } from '../components/hero';
import { Icon } from '../components/icon';
import Nav from '../components/navbar';
import { Project } from '../components/project'
import { Section } from '../components/section';
import { SkillIcon } from '../components/skill-icon'
import { AncestorTile } from '../components/tile';
import { H1, H3, H4, Text } from '../components/typography';
import { games, otherProjects } from '../models/project';

const IndexPage = () => (
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
        <Text>
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
            <H1 alignment='center'><SkillIcon><Icon><FaGamepad /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Games</H4>
            <Text>
              I've made games in Unity, UE4 & XNA/MonoGame. I've participated in multiple
              game jams, and have experience building VR applications.
            </Text>
          </Column>
          <Column size={3}>
          <H1 alignment='center'><SkillIcon><Icon><FaReact /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Web</H4>
            <Text>
              I've worked on projects using React and Redux, CoffeeScript, TypeScript, and more.
              I'm also experienced in build tools like gulp, webpack, and Next.js.
            </Text>
          </Column>
          <Column size={3}>
          <H1 alignment='center'><SkillIcon><Icon><FaRobot /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Machine Learning</H4>
            <Text>
              I have experience with developing a custom machine learning solution using ELMs.
              In addition, I have experience with TensorFlow and scikit-learn.
            </Text>
          </Column>
          <Column size={3}>
          <H1 alignment='center'><SkillIcon><Icon><FaDesktop /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Other Software</H4>
            <Text>
              I've worked with Docker and several continuous integration & deployment solutions.
              I also have experience with building native applications using Electron.
            </Text>
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

export default IndexPage