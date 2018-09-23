import styled from 'styled-components'

import { getFontSize, vars } from './style-variables'

export const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('static/img/controller.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
`

export const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

export const SocialButton = styled.a`
  padding: 10px;
  display: inline-flex;
  border: 2px solid ${vars.white};
  border-radius: ${vars["radius-rounded"]};
  color: ${vars.white};
  background-color: transparent;
  
  align-items: center;
  justify-content: center;
  text-align: center;

  ${getFontSize(5)};
  margin-bottom: 2rem;

  &:hover {
    color: ${vars.primary()};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-color: ${vars.primary()};
  }

  margin-left: 1em;
  margin-right: 1em;
`

export const SocialButtonContainer = styled.div`
  position: absolute;
  bottom: 3em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`