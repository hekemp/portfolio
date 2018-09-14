import * as React from 'react'

import { Chip, Chips } from './chip'
import { ChildTile } from './tile'
import { H5, Text } from './typography' 

import {IProject} from '../models/project'

interface IProjectProps {
  projectDetails: IProject
}

export const Project = (props: IProjectProps) => (
  <ChildTile size={4}>
    <H5>{props.projectDetails.name}</H5>
    <Text>{props.projectDetails.description}</Text>
    <Chips>
      <Chip>C++</Chip>
      <Chip color='purple'>TypeScript</Chip>
    </Chips>
  </ChildTile>
)