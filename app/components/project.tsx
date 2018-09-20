import moment from 'moment'
import * as React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import { Chip, Chips } from './chip'
import { Column, Columns } from './column';
import { Icon } from './icon'
import { Image } from './image'
import { H5, H6, Text } from './typography' 

import {IProject} from '../models/project'
import { vars } from './style-variables';

const Card = styled.div`
  padding: 2em;
  margin: 1em;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.18);
  border: 1px solid ${vars.border()};
  border-radius: ${vars.radius};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  height: 100%;
  position: relative;
`

const CardFooter = styled.div`
  margin-top: auto;
  margin-left: -2em;
  margin-right: -2em;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  margin-bottom: -2em;
  padding-bottom: 1em;
  border-top: 1px solid ${vars.border()};
`

interface IProjectProps {
  projectDetails: IProject
}

const tagColorMap = {
  // ENGINES
  'Unity': vars.purple,
  'Unreal Engine 4': vars.green,

  // LANGUAGES
  'Blueprints': vars.turquoise,
  'C++': vars.red,
  'C#': vars.orange,
  'JavaScript': vars.lime,
  'Ruby': vars.maroon,
  'Flutter': vars.blue,
  'Python': vars.yellow,

  // OTHER
}

const getColorForTag = (tag: string): string => {
  return tagColorMap[tag] ? tagColorMap[tag] : vars.background()
}

interface IProjectImgProps {
  src: string
  isThumbnail?: boolean
  height?: number
  alt: string
}

const ProjectImg = (props: IProjectImgProps) => (
  <LazyLoad once offset={100} height={props.height}>
    <Image src={`/static/img/${props.isThumbnail ? 'thumbnails' : 'projects'}/${props.src}`} alt={props.alt} />
  </LazyLoad>
)

const ProjectChecks = styled.div`
  padding: 0;
  margin-bottom: 1.5em;
`

const ProjectCheckHolder = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-top: 1px solid ${vars.border()};
  &:last-child {
    border-bottom: 1px solid ${vars.border()};
  }
  &:hover {
    background-color: ${vars["white-ter"]}
  }
`

const ProjectCheck = styled.span`
  padding-left: 0;
  padding-right: 4px;
  position: relative;
  top: 2px;
`

const ProjectCheckText = styled(Text)`
  margin-bottom: 0;
  line-height: 1.2;
`

export const Project = (props: IProjectProps) => (
  <>
    <Card>
      <H5>{props.projectDetails.name}</H5>
      <H6>{props.projectDetails.date}</H6>
      <ProjectImg src={props.projectDetails.thumbnail_img_path} isThumbnail height={200} alt={`cover image for ${props.projectDetails.name}`} />
      <Text color={vars["grey-dark"]}><em>{props.projectDetails.summary}</em></Text>
      <ProjectChecks>
        {props.projectDetails.tasks && props.projectDetails.tasks.map((val, i) => (
          <ProjectCheckHolder key={i}>
            <ProjectCheckText><ProjectCheck><Icon><FaAngleDoubleRight aria-hidden='true' /></Icon></ProjectCheck> {val}</ProjectCheckText>
          </ProjectCheckHolder>
        ))}
      </ProjectChecks>
      <CardFooter>
        <Chips>
          {props.projectDetails.tags && props.projectDetails.tags.map((val, index) => (
            <Chip key={index} color={getColorForTag(val)}>{val}</Chip>
          ))}
        </Chips>
      </CardFooter>
    </Card>
  </>
)

interface IProjectsProps {
  projects: IProject[]
}

const numProjectCols = 3
export function splitIntoChunks<T>(arr: T[], chunkSize: number) {
  // return [...Array(chunkSize)].map((_0, i) => arr.filter((_1, i2) => i2 % chunkSize === i))
  return arr.map((_, i) => i % chunkSize === 0 ? arr.slice(i, i+chunkSize) : null).filter((e) => e)
}

function sortProjectsByDate(arr: IProject[]) {
  return arr.sort((a, b) => (moment(b.date, "MMMM YYYY").valueOf() - moment(a.date, "MMMM YYYY").valueOf()))
}

export const Projects = (props: IProjectsProps) => (
  <>
    {splitIntoChunks(sortProjectsByDate(props.projects), numProjectCols).map((value, index) => (
      <Columns key={index}>
        {value.map((project, index2) => (
          <Column key={index2} size={12/numProjectCols}>
            <Project key={index2} projectDetails={project} />
          </Column>
        ))}
      </Columns>
    ))}
  </>
)