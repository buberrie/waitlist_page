import React from 'react'
import { Wrapper } from './input.styled'

const Input = (props) => {
  return (
    <Wrapper>
      <label htmlFor={props.htmlFor}>
        <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.handleChange} />
      </label>
    </Wrapper>
  )
}

export default Input