import React from 'react'
import { Contact, FlexBox, Location, Slogan, Wrapper } from './footer.styled'
import FooterHouse from '../../images/footer 1.png';
import FooterPhone from '../../images/footer 2.png';

const Footer = () => {
  return (
    <Wrapper>
        <FlexBox>
            <Location>
                <img src={FooterHouse} alt="" />
                <p>2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
            </Location>
            <Slogan>
                <p>Loyalbaze is almost here.</p>
            </Slogan>
            <Contact>
                <img src={FooterPhone} alt="" />
                <span>+234 903 618 9485</span>
            </Contact>
        </FlexBox>
    </Wrapper>
  )
}

export default Footer