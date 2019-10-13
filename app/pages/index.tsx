import React from 'react';
import { FaUniversalAccess, FaGamepad, FaReact, FaChartArea } from 'react-icons/fa'
import { Column, Columns } from '../components/column';
import { Container } from '../components/container';
import { Footer } from '../components/footer'
import { HeroImage, HeroSocialButtonContainer, HeroText, SocialButtonContainer, SocialButtons } from '../components/hero';
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
    <Nav shouldUseScroll />
    <HeroImage>
      <HeroText>
        <H1 color={vars.white} alignment='center'>Heather Kemp</H1>
        <H4 color={vars.white} alignment='center'>Accessibility-Focused Gameplay Programmer & Software Engineer</H4>
      </HeroText>
      <HeroSocialButtonContainer>
        <SocialButtons />
      </HeroSocialButtonContainer>
    </HeroImage>
    <Section id="about">
      <Container>
        <H2 alignment='center' >About Me</H2>
        <Text>
          I'm Heather Kemp, a software engineer and game developer. I received my Master's degree in computer
          science from the University of Iowa in 2019, and am currently working at Microsoft. My passion for programming started 
          when I made a simple calculator in Java for some basic statistics in the Kingdom Hearts mobile game. It was such a simple
          program, and yet it really helped to ease the burden of daily tasks in my guild. Throughout my career,
          I've since learned that I could not only simplify work with technology, but also expand possibilities and empower others to do 
          things they never could before. Ever since then, I've taken several courses in accessibility and worked on projects like a 
          virtual reality game for people who are blind or with low vision and WCAG compliant reports and webpages for my university and workplace.
          I'm thrilled to be working alongside my peers as we all work together to empower everyone and build a more inclusive tomorrow today.
        </Text>
        <Columns alignment='center'>
          <Column size={3}>
            <H1 alignment='center'><SkillIcon><Icon><FaGamepad /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Games</H4>
            <Text>
              I've made games in Unity and UE4. I've participated in multiple
              game jams, and have experience building VR applications.
            </Text>
          </Column>
          <Column size={3}>
            <H1 alignment='center'><SkillIcon><Icon><FaReact /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Web</H4>
            <Text>
              I've worked on projects using React, TypeScript, Electron, and more.
              I'm also experienced in tools like webpack, Enzyme, and Jest.
            </Text>
          </Column>
          <Column size={3}>
            <H1 alignment='center'><SkillIcon><Icon><FaUniversalAccess /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Accessibility</H4>
            <Text>
              I have experience with developing a variety of accessible UX's, with a focus on
              vision and mobility accessibility.
            </Text>
          </Column>
          <Column size={3}>
            <H1 alignment='center'><SkillIcon><Icon><FaChartArea /></Icon></SkillIcon></H1>
            <H4 alignment='center'>Data Analytics</H4>
            <Text>
              I've created impactful and efficient dashboards and reports for thousands of data points from databases
              like Kusto, Cosmos, Mongo, SQL, and Postgres.
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
    <Section id="contact" color={vars.dark()}>
      <Container>
        <H2 alignment='center' color={vars.white}>Contact Me</H2>
        <Columns alignment='center'>
          <Column size={8}>
            <Text alignment='center' color={vars.light()}>I'm always interested in collaborating on new projects! Feel free to reach out via one of the links below:</Text>
            <SocialButtonContainer>
              <SocialButtons />
            </SocialButtonContainer>
          </Column>
        </Columns>
      </Container>
    </Section>
    <Footer />
  </div>
);

export default IndexPage