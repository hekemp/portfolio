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

  ${media.desktop`
    padding-top: 25px;
    padding-bottom: 25px;
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

  ${media.desktop`
    font-size: 2em;
    transition: all .3s;
  `};
`;

const NavbarCollapse = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
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
`;

const NavItem = styled.li`
  display: list-item;
`;

const NavLink = styled.a`
  ${BaseHeader};
  ${generateHeaderSize(1)};
  color: ${colors.white};
  display: block;
  padding: 0.5em 0.5em;
  outline: none;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${colors.purple};
  }
`;

const Nav = () => (
  <Navbar>
    <Container>
      <NavbarBrand>Alic Szecsei</NavbarBrand>
      <NavbarCollapse>
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
);

export default Nav;
