import React from 'react';
import { Get, Wrapper, Logo, GradientBorder } from './topbar.styled';
import LogoImg from '../../images/logo-img.png';

const Topbar = () => {
  return (
    <Wrapper>
        <Logo>
            <span>l</span>
            <img src={LogoImg} alt="heart" />
            <span>yalbaze</span>
        </Logo>
        <GradientBorder>
            <Get>
                Get Priority Access
            </Get>
        </GradientBorder>
    </Wrapper>
  )
}

export default Topbar