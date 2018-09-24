import * as React from 'react'

import { ProjectPage } from '../components/project-page'
import { games } from '../models/project'

const ZephyrPage = () => (
  <ProjectPage project={games.filter(v => v.url === 'zephyr')[0]} />
)

export default ZephyrPage