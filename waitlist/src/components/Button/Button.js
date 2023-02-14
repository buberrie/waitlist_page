import React from 'react'
import { Wrapper, Click } from './button.styled'

const Button = (props) => {
  return (
    <Wrapper>
        <Click>
            {props.text}
        </Click>
    </Wrapper>
  )
}

export default Button