import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    color: white;
`

//Logo design 
export const Logo = styled.div`
    font-family: 'DM sans', sans-serif;
    font-weight: 700;
    font-size: 48px;

    @media (max-width: 850px) {
        font-size: 34px;

        img {
            width: 25px;
        }
    }
` 

//get access button
export const GradientBorder = styled.div`
    background-image: linear-gradient(139.25deg, #5404FF 18.35%, rgba(189, 59, 210, 0.94) 71.49%);
    width: 11.4em;
    height: 50px;
    border-radius: 25px;
    display: flex;

    @media (max-width: 850px) {
        width: 8.4em;
        height: 44px;
    }
`

export const Get = styled.button`
    font-family: 'Satoshi', sans-serif;
    font-weight: 700;
    color: #FCFCFC;
    width: 12.75em;
    height: 46px;
    background-color: #121B27;
    border: none;
    font-size: 14px;
    margin: auto;
    border-radius: 25px;

    @media (max-width: 850px) {
        font-size: 12px;
        width: 11em;
        height: 40px;
    }
`