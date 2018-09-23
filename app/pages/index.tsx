import React from 'react';
import { FaDesktop, FaEnvelope, FaGamepad, FaGithub, FaLinkedinIn, FaReact, FaRobot, FaTumblr, FaTwitter } from 'react-icons/fa'

import { Column, Columns } from '../components/column';
import { Container } from '../components/container';
import { Footer } from '../components/footer'
import { HeroImage, HeroText, SocialButton, SocialButtonContainer } from '../components/hero';
import { Icon } from '../components/icon';
import Nav from '../components/navbar';
import { Projects } from '../components/projects'
import { Section } from '../components/section';
import { SkillIcon } from '../components/skill-icon'
import { vars } from '../components/style-variables'
import { H1, H2, H4, Text } from '../components/typography';
import { games, otherProjects } from '../models/project';

const IndexPage = () => (
  <div>
    <Nav />
    <HeroImage>
      <HeroText>
        <H1 color={vars.white} alignment='center'>Alic Szecsei</H1>
        <H4 color={vars.white} alignment='center'>Game Developer & Software Engineer</H4>
      </HeroText>
      <SocialButtonContainer>
        <SocialButton href='mailto:aszecsei@gmail.com'><Icon><FaEnvelope aria-labelledby='Email' role='img' /></Icon></SocialButton>
        <SocialButton href='https://twitter.com/aszecsei'><Icon><FaTwitter aria-labelledby='Twitter' role='img' /></Icon></SocialButton>
        <SocialButton href='https://linkedin.com/in/alic-szecsei'><Icon><FaLinkedinIn aria-labelledby='LinkedIn' role='img' /></Icon></SocialButton>
        <SocialButton href='https://github.com/aszecsei'><Icon><FaGithub aria-labelledby='GitHub' role='img' /></Icon></SocialButton>
        <SocialButton href='http://blog.alic-szecsei.com'><Icon><FaTumblr aria-labelledby='Tumblr' role='img' /></Icon></SocialButton>
      </SocialButtonContainer>
    </HeroImage>
    <Section id="about">
      <Container>
        <H2 alignment='center' >About Me</H2>
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
        <H2 alignment='center'>Games</H2>
        <Projects projects={games} />
      </Container>
    </Section>
    <Section id="projects">
      <Container>
        <H2 alignment='center'>Other Projects</H2>
        <Projects projects={otherProjects} />
      </Container>
    </Section>
    <Section id="skills">
      <Container>
        <H2 alignment='center'>Skills</H2>
      </Container>
    </Section>
    <Section id="contact">
      <Container>
        <H2 alignment='center'>Contact Me</H2>
      </Container>
    </Section>
    <Footer />
  </div>
);

export default IndexPage