import * as React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'

import { Chip, Chips } from './chip'
import { Icon } from './icon'
import { Image } from './image'
import { Tile } from './tile'
import { H5, H6, Text } from './typography' 

import {IProject} from '../models/project'
import { vars } from './style-variables';

const Card = styled.div`
  padding: 2em;
  margin: 1em;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.20);
  border-color: ${vars.border()};
  border-width: 1px;
  border-style: solid;
  border-radius: ${vars.radius};
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
  margin-bottom: 4px;
`

const ProjectCheck = styled.span`
  padding-left: 0;
  padding-right: 4px;
  position: relative;
  top: 2px;
`

export const Project = (props: IProjectProps) => (
  <Tile size={4}>
    <Card>
      <H5>{props.projectDetails.name}</H5>
      <H6>{props.projectDetails.date}</H6>
      <ProjectImg src={props.projectDetails.thumbnail_img_path} isThumbnail height={200} alt={`cover image for ${props.projectDetails.name}`} />
      <Text dangerouslySetInnerHTML={{__html: props.projectDetails.description[0]}} />
      <ProjectChecks>
        {props.projectDetails.tasks && props.projectDetails.tasks.map((val, i) => (
          <ProjectCheckHolder key={i}>
            <ProjectCheck><Icon><FaAngleDoubleRight aria-hidden='true' /></Icon></ProjectCheck> {val}
          </ProjectCheckHolder>
        ))}
      </ProjectChecks>
      <Chips>
        {props.projectDetails.tags && props.projectDetails.tags.map((val, index) => (
          <Chip key={index} color={getColorForTag(val)}>{val}</Chip>
        ))}
      </Chips>
    </Card>
  </Tile>
)