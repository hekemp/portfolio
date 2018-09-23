import skillsList from './skills.json'

export interface ISkill {
  name: string
  percent: number
}

export const skills = skillsList as ISkill[]