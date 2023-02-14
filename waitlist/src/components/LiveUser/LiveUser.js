import React from 'react'
import UserOdd from '../UserOdd/User'
import UserEven from '../UserEven/User'
import { Joined, UserIcon, Wrapper } from './liveUser.stlyed'

const LiveUser = () => {
  return (
    <Wrapper>
        <UserIcon>
            <UserOdd name="M"/>
            <UserEven name2="U"/>
            <UserOdd name="O"/>
            <UserEven name2="G"/>
        </UserIcon>
        <Joined>
            <p>+57 joined</p>
        </Joined>
    </Wrapper>
  )
}

export default LiveUser