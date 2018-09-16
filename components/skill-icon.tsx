import anime from 'animejs'
import * as React from 'react'

interface ISkillIconProps {
  bounces?: boolean
}

export class SkillIcon extends React.Component<ISkillIconProps, {}> {

  private divRef = React.createRef<HTMLDivElement>()

  constructor(props: ISkillIconProps) {
    super(props)
  }

  public render() {
    return (
      <div style={{display: 'inline-block'}} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} ref={this.divRef}>
        {this.props.children}
      </div>
    )
  }

  private getAnimeProps = (isHovered: boolean): anime.AnimeParams => ({
    targets: this.divRef.current,
    scale: {
      value: isHovered ? 1.2 : 1,
      duration: 500,
    },
    rotate: isHovered ? [
      { value: 10, duration: 200, delay: 0, easing: 'easeInOutSine' },
      { value: 0, duration: 200, delay: 0, easing: 'easeInOutSine' },
    ] : 0,
    elasticity: 400,
  })

  private mouseEnter = () => {
    // tslint:disable-next-line:no-console
    console.log('Enter')
    anime.remove(this.divRef.current)
    anime(this.getAnimeProps(true))
  }

  private mouseLeave = () => {
    // tslint:disable-next-line:no-console
    console.log('Exit')
    anime.remove(this.divRef.current)
    anime(this.getAnimeProps(false))
  }
}