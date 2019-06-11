import { rgba } from 'polished'
import * as React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMastodon, FaWordpressSimple, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

import { Icon } from './icon'
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
  width: 100%;
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
  margin-bottom: 1rem;

  &:hover {
    color: ${vars.primary()};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-color: ${vars.primary()};
    background-color: ${rgba(vars.primary(), 0.3)};
  }

  margin-left: 1em;
  margin-right: 1em;
`

export const SocialButtonContainer = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  margin-top: 1rem;
`

export const HeroSocialButtonContainer = styled(SocialButtonContainer)`
  bottom: 3em;
  position: absolute;
  top: auto;
`

export const SocialButtons = () => (
  <>
    <SocialButton href='mailto:aszecsei@gmail.com'><Icon><FaEnvelope aria-labelledby='Email' role='img' /></Icon></SocialButton>
    <SocialButton href='https://twitter.com/aszecsei'><Icon><FaTwitter aria-labelledby='Twitter' role='img' /></Icon></SocialButton>
    <SocialButton href='https://mastodon.gamedev.place/@aszecsei'><Icon><FaMastodon aria-labelledby='Mastodon' role='img' /></Icon></SocialButton>
    <SocialButton href='https://linkedin.com/in/alic-szecsei'><Icon><FaLinkedinIn aria-labelledby='LinkedIn' role='img' /></Icon></SocialButton>
    <SocialButton href='https://github.com/aszecsei'><Icon><FaGithub aria-labelledby='GitHub' role='img' /></Icon></SocialButton>
    <SocialButton href='http://blog.alic-szecsei.com'><Icon><FaWordpressSimple aria-labelledby='Wordpress' role='img' /></Icon></SocialButton>
  </>
)