import * as React from 'react'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import NextHead from 'next/head'

import { IProject } from '../models/project'

import { Column, Columns } from './column'
import { Container } from './container'
import { Footer } from './footer'
import GitHub from './github-widget'
import { Image, ImageGif } from './image'
import Nav from './navbar'
import { Section } from './section'
import { vars } from './style-variables'
import { H1, H2, H5, Text } from './typography'
import { media } from './utils'
interface IProjectPageProps {
  project: IProject
}

const ProjectSummaries = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProjectSummaryHolder = styled.div`
  display: flex;
  justify-content: center;
  &:not(:last-child) {
    border-bottom: 1px solid ${vars.border};
  }
  margin: 5px 0;
  flex-direction: row;
  padding-top: 1rem;
  width: 100%;
  ${media.tablet`
    margin: 0;
    width: ${(100 * 1) / 2}%;
  `}
`

const ProjectSummaryText = styled.div`
  width: ${(100 * 1) / 2}%;
  padding: 0 2rem;
`

const ProjectSummaryLabel = styled(ProjectSummaryText)`
  font-weight: ${vars['weight-bold']};
  text-align: right;
`

interface IItchWidgetProps {
  itch: string
}

const ItchWidget = (props: IItchWidgetProps) => (
  <LazyLoad once offset={200} height={400}>
    <iframe frameBorder="0" src={props.itch} width="100%" height="auto" />
  </LazyLoad>
)

const YoutubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  margin-bottom: 1em;
`

const YoutubeIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface IYoutubeWidgetProps {
  youtube: string
}

const YoutubeWidget = (props: IYoutubeWidgetProps) => (
  <YoutubeIframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${props.youtube}?rel=0&amp;showinfo=0`}
    frameBorder="0"
    allowFullScreen
  />
)

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${vars.blue};
  transition: all 0.1s ease-in-out;
  display: inline-block;
  position: relative;
  margin: 2rem 0;
  padding: 0.5rem 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 1px;
    display: block;
    transition: all 0.1s ease-in-out;
    transform: translateY(-5px) scaleX(0);
    background-color: ${vars.blue};
    opacity: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 0;
    width: 100%;
    height: 1px;
    display: block;
    transition: all 0.1s ease-in-out;
    transform: translateY(5px) scaleX(0);
    background-color: ${vars.blue};
    opacity: 0;
  }

  &:hover {
    color: ${vars.primary()};
    cursor: pointer;
    &:before {
      transform: translateY(0) scaleX(1);
      background-color: ${vars.primary()};
      opacity: 1;
    }
    &:after {
      transform: translateY(0) scaleX(1);
      background-color: ${vars.primary()};
      opacity: 1;
    }
  }
`

export const ProjectPage = (props: IProjectPageProps) => (
  <>
    <NextHead>
      <title>{props.project.name} | Alic Szecsei</title>
    </NextHead>
    <Nav />
    <Section>
      <Container>
        <H1 alignment="center">{props.project.name}</H1>
        <H5 alignment="center" color={vars.grey}>
          {props.project.date}
        </H5>
        <Columns alignment="center">
          <Column size={8}>
            <Image
              src={`/static/img/projects/${props.project.img_path}`}
              alt={`Image showing ${props.project.name}`}
              hasRoundedCorners
            />
          </Column>
        </Columns>
        <ProjectSummaries>
          <ProjectSummaryHolder>
            <ProjectSummaryLabel>
              <Text alignment="right">Project Type</Text>
            </ProjectSummaryLabel>
            <ProjectSummaryText>
              <Text>{props.project.type}</Text>
            </ProjectSummaryText>
          </ProjectSummaryHolder>
          <ProjectSummaryHolder>
            <ProjectSummaryLabel>
              <Text alignment="right">Software Used</Text>
            </ProjectSummaryLabel>
            <ProjectSummaryText>
              <Text>{props.project.software}</Text>
            </ProjectSummaryText>
          </ProjectSummaryHolder>
          <ProjectSummaryHolder>
            <ProjectSummaryLabel>
              <Text alignment="right">Languages Used</Text>
            </ProjectSummaryLabel>
            <ProjectSummaryText>
              <Text>{props.project.language}</Text>
            </ProjectSummaryText>
          </ProjectSummaryHolder>
          <ProjectSummaryHolder>
            <ProjectSummaryLabel>
              <Text alignment="right">Primary Role(s)</Text>
            </ProjectSummaryLabel>
            <ProjectSummaryText>
              <Text>{props.project.role}</Text>
            </ProjectSummaryText>
          </ProjectSummaryHolder>
        </ProjectSummaries>
      </Container>
    </Section>
    <Section color={vars.dark()}>
      <Container>
        <Columns alignment="center">
          <Column size={8}>
            <H2 alignment="center" color={vars.light()}>
              Description
            </H2>
            {props.project.description.map((v, i) => (
              <Text
                key={i}
                color={vars.light()}
                dangerouslySetInnerHTML={{ __html: v }}
              />
            ))}
            {props.project.gif_path ? <ImageGif src={`/static/img/projects/${props.project.gif_path}`} alt={`a gif of ${props.project.name}`} /> : false}
            {props.project.youtube ? <YoutubeWrapper><YoutubeWidget youtube={props.project.youtube} /></YoutubeWrapper> : false}
            {props.project.embedded ? <iframe width="640" height="320" data-original={`${props.project.embedded}`} src={`${props.project.embedded}`} data-was-processed="true"></iframe> : false }
          </Column>
        </Columns>
      </Container>
    </Section>
    {props.project.link || props.project.github || props.project.itch ? <Section>
      <Container>
        <H2 alignment='center'>Links</H2>
        {props.project.link ? <H5 alignment='center'><ProjectLink href={props.project.link} rel="noopener noreferrer" target="_blank">More About {props.project.name}</ProjectLink></H5> : false}
        <Columns alignment='center'>
          {props.project.github ? <Column size={6}><GitHub repository={props.project.github} /></Column> : false}
          {props.project.itch ? <Column size={6}><ItchWidget itch={props.project.itch} /></Column> : false}
        </Columns>
      </Container>
    </Section> : false }
    <Section color={vars.dark()} size={`small`}>
      <Container>
      {props.project.returnLink ? <H5 alignment='center'><ProjectLink href={`/#` + props.project.returnLink}>Go back</ProjectLink></H5> : false}
        </Container>
    </Section>
    <Footer />
  </>
)
