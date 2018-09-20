import projects from './projects.json'

export interface IProject {
  name: string
  description: string[]
  date: string
  tags?: string[]
  tasks?: string[]

  thumbnail_img_path: string
  img_path: string
  gif_path?: string

  link: string
  github?: string
  itch?: string
  youtube?: string
}

export const games = projects.games as IProject[]
export const otherProjects = projects.other as IProject[]
