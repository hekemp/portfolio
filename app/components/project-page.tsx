import * as React from 'react'

import { IProject } from '../models/project'
import Nav from './navbar'

interface IProjectPageProps {
  project: IProject
}

export const ProjectPage = (props: IProjectPageProps) => (
  <>
    <Nav />
    {props.project.name}
  </>
)