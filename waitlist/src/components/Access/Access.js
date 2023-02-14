import React from 'react'
import { Background, Content, H1, Heading, ButtonBox, Wrapper, InputBox } from './access.styled'
import Topbar from '../Topbar/Topbar'
import EllipseLg from '../../images/Ellipse 37.png';
import EllipseSm from '../../images/Ellipse 39.png';
import StarLg from '../../images/Star 1.png';
import StarSm from '../../images/Star 3.png';
import Sprial from '../../images/Vector.png';
import { BsEnvelope } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa"
import Button from '../Button/Button'
import LiveUser from '../LiveUser/LiveUser';

const Access = ({setPopIn}) => {
  return (
    <Wrapper>
      <Topbar />
      <Background>
        <img src={EllipseLg} alt="" />
        <img src={EllipseSm} alt="" />
        <img src={EllipseSm} alt="" />
        <img src={StarSm} alt="" />
        <img src={StarSm} alt="" />
        <img src={Sprial} alt="" />
        <img src={StarLg} alt="" />
        <img src={StarLg} alt="" />
      </Background>
      <Heading>
        <H1 onClick={setPopIn}>
          Turn your best customers into <span>Loyal fans</span>
        </H1>
      </Heading>
      <Content>
        <p>
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.
        </p>
      </Content>
      <InputBox>
        <FaRegUserCircle style={{color: 'white', width: '40px', fontSize: '20px'}}/>
        <label htmlFor="name">
          <input type="text" id="name" placeholder="Tell us your name" />
        </label>
      </InputBox>
      <InputBox>
        <BsEnvelope style={{color: 'white', width: '40px', fontSize: '20px'}}/>
        <label htmlFor="email">
          <input type="email" id="email" placeholder="Enter your email address" />
        </label>
      </InputBox>
      <ButtonBox onClick={setPopIn}>
        <Button text="Get early access" />
      </ButtonBox>
      <LiveUser />
    </Wrapper>
  )
}

export default Access