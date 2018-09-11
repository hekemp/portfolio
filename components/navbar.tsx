import * as React from 'react';
import styled, { css } from 'styled-components';
import { Container } from './container';
import { BaseHeader, generateHeaderSize } from './typography';
import { colors, media } from './utils';

const Navbar = styled.nav`
  text-transform: uppercase;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;

  padding-top: 10px;
  padding-bottom: 10px;

  ${media.desktop`
    padding-top: 15px;
    padding-bottom: 15px;
    transition: padding-top .3s, padding-bottom .3s;
  `};
`;

const NavbarBrand = styled.a`
  ${BaseHeader};
  ${generateHeaderSize(2)};
  color: ${colors.white};

  display: inline-block;
  padding-top: 0.3125em;
  padding-bottom: 0.3125em;
  margin-right: 1em;
  white-space: nowrap;
  outline: none;
  text-decoration: none;
  padding-left: 0.5em;
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
    ${(props: INavbarCollapseProps) => props.isActive ? false : css`display: none;`};
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
`;

const NavItem = styled.li`
  display: list-item;
`;

const NavLink = styled.a`
  ${BaseHeader};
  ${generateHeaderSize(1)};
  color: ${colors.white};
  display: block;
  padding-left: 1em;
  outline: none;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${colors.purple};
  }
`;

interface IHamburgerDivProps {
  dimensions: number
}

const HamburgerDiv = styled<IHamburgerDivProps, 'div'>('div')`
  margin-left: auto;
  cursor: pointer;
  display: block;
  color: white;
  height: ${(props: IHamburgerDivProps) => props.dimensions}px;
  position: relative;
  width: ${(props: IHamburgerDivProps) => props.dimensions}px;
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
        <Container>
          <NavbarBrand>Alic Szecsei</NavbarBrand>
          <Hamburger dimensions={44} isActive={this.state.isActive} onClick={this.onClickHamburger} />
          <NavbarCollapse isActive={this.state.isActive}>
            <NavbarNav>
              <NavItem>
                <NavLink>Games</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="http://blog.alic-szecsei.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </NavLink>
              </NavItem>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    )
  }

  private onClickHamburger = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  };
}

// const Nav = () => (
//   
// );

export default Nav;
