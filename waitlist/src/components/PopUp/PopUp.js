import React from 'react'
import { Box, CheckBox, Circle, Message, Wrapper } from './PopUp.styled'
import Check from '../../images/Vector 3.png';

const PopUp = ({popIn, easeOut}) => {
    
  return (
    <Wrapper>
        <Box popIn={popIn} easeOut={easeOut}>
            <Circle></Circle>
            <CheckBox>
                <img src={Check} alt="" />
            </CheckBox>
            <Message>
                <p>Congratulations</p>
                <p>
                    Great move! You're one step closer to getting your hands on the product. 
                    Please check your mail for more information.
                </p>
            </Message>
        </Box>
    </Wrapper>
  )
}

export default PopUp