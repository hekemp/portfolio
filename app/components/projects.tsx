import * as JsSearch from 'js-search'
import moment from 'moment'
import * as React from 'react'
import { stem } from 'stemr'
import { Column, Columns } from './column'
import { Project } from './project'

import { IProject } from '../models/project'
import * as Form from './form'

interface IProjectsProps {
  projects: IProject[]
}

const numProjectCols = 3
export function splitIntoChunks<T>(arr: T[], chunkSize: number) {
  // return [...Array(chunkSize)].map((_0, i) => arr.filter((_1, i2) => i2 % chunkSize === i))
  return arr
    .map((_, i) => (i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null))
    .filter(e => e)
}

function sortProjectsByDate(arr: IProject[]) {
  return arr.sort(
    (a, b) =>
      moment(b.date, 'MMMM YYYY').valueOf() -
      moment(a.date, 'MMMM YYYY').valueOf(),
  )
}

interface IProjectsState {
  filter: string,
  inputValue: string,
}

export class Projects extends React.Component<IProjectsProps, IProjectsState> {
  private search: JsSearch.Search
  constructor(props: IProjectsProps) {
    super(props)
    this.state = {
      filter: "",
      inputValue: ''
    }
    this.search = new JsSearch.Search('id')
    this.search.tokenizer = new JsSearch.StemmingTokenizer(
      stem,
      new JsSearch.SimpleTokenizer(),
    )
    this.search.addIndex('name')
    this.search.addIndex('summary')
    this.search.addIndex('description')
    this.search.addIndex('date')
    this.search.addIndex('tasks')
    this.search.addIndex('tags')
    this.search.addDocuments(this.props.projects.map((v, id) => ({ ...v, id })))
  }

  public render() {
    return (
      <>
        <Columns>
          <Column size={4} offsetSize={8}>
            <Form.Field>
              <Form.Control>
                <Form.Input
                  placeholder="Search"
                  type="text"
                  onChange={this.updateFilter}
                  aria-label="Search"
                  value={this.state.inputValue}
                />
              </Form.Control>
            </Form.Field>
          </Column>
        </Columns>
        {splitIntoChunks(
          this.state.filter !== ''
            ? (this.search.search(this.state.filter) as IProject[])
            : sortProjectsByDate(this.props.projects),
          numProjectCols,
        ).map((value, index) => (
          <Columns key={index}>
            {value &&
              value.map((project, index2) => (
                <Column key={index2} size={12 / numProjectCols}>
                  <Project key={index2} projectDetails={project} onChipClicked={this.updateChipClicked}/>
                </Column>
              ))}
          </Columns>
        ))}
      </>
    )
  }

  private updateChipClicked = (tag: string) => {
    
    this.setState({filter: tag, inputValue: tag});
  }

  private updateFilter = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    this.setState({filter: input.value, inputValue: input.value})
  }
}
