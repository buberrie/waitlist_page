import React from 'react'
import { UserIcon, Wrapper } from './user.styled'

const User = (props) => {
  return (
    <Wrapper>
        <UserIcon>
            <p>{props.name}</p>
        </UserIcon>
    </Wrapper>
  )
}

export default User