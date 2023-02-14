import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 140px;

    @media (max-width: 900px) {
        margin-top: 40px;
    }
`

export const FlexBox = styled.footer`
    border-top: 1px solid #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 85px;
    padding: 24px 0;
    font-family: 'Satoshi', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    @media (max-width: 900px) {
        font-size: 14px;
        margin: 0 50px;
    }

    @media (max-width: 620px) {
        flex-wrap: nowrap;
        flex-direction: column;
        font-size: 14px;
        margin: 0 50px;
    }
`

export const Location = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
 
    p{
        width: 70%;
    }

    img {
        height: 20.22px;
        margin-right: 10px;
    }

    @media (max-width: 900px) {
        img {
            height: 18px;
            margin-top: 5px;
        }
    }

    @media (max-width: 620px) {
        img {
            height: 16px;
            margin-top: 15px;
        }

        margin-top: -10px;
        justify-content: center;
    }
`

export const Slogan = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;

    @media (max-width: 620px) {
        margin-top: 30px;
    }
`

export const Contact = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: end;
     
    img {
        margin-right: 10px;
        height: 20.22px;
    }

    @media (max-width: 900px) {
        img {
            height: 16px;
            margin-top: 5px;
        }
    }

    @media (max-width: 620px) {
        img {
            height: 14px;
            margin-top: 5px;
        }

        margin-top: 30px;
        justify-content: center;
    }
`