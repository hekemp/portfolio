import * as React from 'react';
import { scroller } from 'react-scroll'
import styled, { css } from 'styled-components';
import { Container } from './container';
import { BaseHeader, generateHeaderSize } from './typography';
import { colors, media } from './utils';

const Navbar = styled.nav`
  text-transform: uppercase;
  border: none;

  background: rgba(0, 0, 0, 0.8);

  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;

  display: block;

  ${media.desktop`
    padding-top: 15px;
    padding-bottom: 15px;
    transition: padding-top .3s, padding-bottom .3s;
    background: rgba(0, 0, 0, 0.7);
  `};
`;

const NavbarBrand = styled.div`
  ${BaseHeader};
  ${generateHeaderSize(4)};
  color: ${colors.white};

  align-items: center;
  display: flex;
  flex-shrink: 0;
  padding: 0.3125em;
  white-space: nowrap;
  outline: none;
  text-decoration: none;
`;

interface INavbarCollapseProps {
  isActive?: boolean
}

const NavbarCollapse = styled<INavbarCollapseProps, 'div'>('div')`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;

  ${media.until('desktop')`
    display: block;
    ${(props: INavbarCollapseProps) => props.isActive
      ? css`
        display: block;
      `
      : css`
        display: none;
      `};
    clear: both;
    width: 100%;
  `}
`;

const NavbarNav = styled.ul`
  letter-spacing: 1px;
  flex-direction: row;
  margin-left: auto;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-top: 0;
  padding-right: 1em;
  ${media.until('desktop')`
    flex-direction: column;
  `}
`;

const NavItem = styled.li`
  display: list-item;
  user-select: none;
`;

const NavLink = styled.a`
  ${BaseHeader};
  ${generateHeaderSize(5)};
  color: ${colors.white};
  display: block;
  padding-left: 1em;
  outline: none;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${colors.purple};
    cursor: pointer;
  }

  ${media.until('desktop')`
    padding-top: .5em;
    padding-bottom: .5em;
    padding-left: 2em;
  `}
`;

const NavbarContainer = styled(Container)`
  ${media.until('desktop')`
    display: block;
    align-items: stretch;
  `}
  flex-direction: row;
`

interface IHamburgerDivProps {
  dimensions: number
}

const HamburgerDiv = styled<IHamburgerDivProps, 'div'>('div')`
  margin-left: auto;
  cursor: pointer;
  color: white;
  height: ${(props: IHamburgerDivProps) => props.dimensions}px;
  position: relative;
  width: ${(props: IHamburgerDivProps) => props.dimensions}px;
  display: block;
  &:hover {
    background-color: rgba(black, 0.05);
  }
  ${media.desktop`
    display:none;
  `}
`

interface IHamburgerSpanProps {
  isActive?: boolean
}

const HamburgerSpan = styled<IHamburgerSpanProps, 'span'>('span')`
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-in-out;
  width: 16px;
  &:nth-child(1) {
    top: calc(50% - 6px);
    ${(props: IHamburgerSpanProps) => props.isActive ? css`
      transform: translateY(5px) rotate(45deg);
    ` : false};
  }
  &:nth-child(2) {
    top: calc(50% - 1px);
    ${(props: IHamburgerSpanProps) => props.isActive ? css`
      opacity: 0;
    ` : false};
  }
  &:nth-child(3) {
    top: calc(50% + 4px);
    ${(props: IHamburgerSpanProps) => props.isActive ? css`
      transform: translateY(-5px) rotate(-45deg);
    ` : false};
  }
`

interface IHamburgerProps {
  dimensions: number
  isActive?: boolean
  onClick?: () => void
}

const Hamburger = (props: IHamburgerProps) => (
  <HamburgerDiv dimensions={props.dimensions} onClick={props.onClick}>
    <HamburgerSpan isActive={props.isActive} />
    <HamburgerSpan isActive={props.isActive} />
    <HamburgerSpan isActive={props.isActive} />
  </HamburgerDiv>
);

interface INavState {
  isActive: boolean
}

class Nav extends React.Component<{}, INavState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  public render() {
    return (
      <Navbar>
        <NavbarContainer>
          <NavbarBrand>
            Alic Szecsei
            <Hamburger dimensions={44} isActive={this.state.isActive} onClick={this.onClickHamburger} />
          </NavbarBrand>
        
          <NavbarCollapse isActive={this.state.isActive}>
            <NavbarNav>
              <NavItem>
                <NavLink href="#about" onClick={this.scrollToAbout}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#games" onClick={this.scrollToGames}>Games</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" onClick={this.scrollToProjects}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills" onClick={this.scrollToSkills}>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/static/Resume.pdf" target="_blank"
                  rel="noopener noreferrer">Resume (PDF)</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="http://blog.alic-szecsei.com"
                >
                  Blog
                </NavLink>
              </NavItem>
            </NavbarNav>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    )
  }

  private onClickHamburger = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  };

  private scrollToAbout = () => {
    scroller.scrollTo('about', {
      smooth: true,
      offset: -100,
    })
  }

  private scrollToGames = () => {
    scroller.scrollTo('games', {
      smooth: true,
      offset: -100,
    })
  }

  private scrollToProjects = () => {
    scroller.scrollTo('projects', {
      smooth: true,
      offset: -100,
    })
  }

  private scrollToSkills = () => {
    scroller.scrollTo('skills', {
      smooth: true,
      offset: -100,
    })
  }
}

// const Nav = () => (
//   
// );

export default Nav;
