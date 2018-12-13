import * as React from 'react'

import { ProjectPage } from '../components/project-page'
import { DataCleaner } from '../models/project'

const DataCleanerPage = () => (
  <ProjectPage project={DataCleaner} />
)

export default DataCleanerPage