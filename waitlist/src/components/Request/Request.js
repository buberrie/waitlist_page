import React from 'react'
import { Wrapper, Background, StringDiv, H1, FlexBox, PriorityArea, FormArea, Img } from './request.styled'
import EllipseSm from '../../images/Ellipse 39.png';
import StarLg from '../../images/Star 1.png';
import StarSm from '../../images/Star 3.png';
import String from '../../images/Line 6.png';
import Vector from '../../images/Vector 2.png';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

const Request = ({setPopIn}) => {
  return (
    <Wrapper>
        <Background>
        <img src={EllipseSm} alt="" />
        <img src={StarSm} alt="" />
        <img src={StarLg} alt="" />
        <img src={StarLg} alt="" />
        <img src={Vector} alt="" />
        <img src={Vector} alt="" />
      </Background>
      <FlexBox>
        <PriorityArea>
            <H1>
                <h1>Priority Access</h1>
                <StringDiv>
                    <img src={String} alt="" />
                </StringDiv>
            </H1>
            <Img></Img>
            <p>
                Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. 
                Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!
            </p>
        </PriorityArea>
        <FormArea>
            <Form onPopIn={setPopIn}/>
        </FormArea>
      </FlexBox>
      <Footer />
    </Wrapper>
  )
}

export default Request