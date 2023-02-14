import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 1024px;

    @media (max-width: 900px) {
            height: 954px;
        }
`
export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 1024px;

    img {
        display: block;

        &:first-child {
            position: absolute;
            margin-left: 20px;
            margin-top: 100px;
        }

        &:nth-child(2) {
            margin-left: 70%;
            margin-top: -20px;
        }

        &:nth-child(3) {
            float: left;
            margin-left: 85%;
            margin-top: 252px;
            width: 400px;
            filter: blur(4px);
        }

        &:nth-child(4) {
            position: absolute;
            margin-left: 30%;
            margin-top: -10px;
        }

        &:nth-child(5) {
            position: absolute;
            margin-left: 80%;
            margin-top: 134px;
        }

        &:nth-child(6) {
            position: absolute;
            margin-left: 70%;
            margin-top: 435px;
        }

        &:nth-child(7) {
            position: absolute;
            margin-left: 10%;
            margin-top: 680px;
        }

        &:nth-child(8) {
            position: absolute;
            margin-left: 87%;
            margin-top: 630px;
        }
    }  

    @media (max-width: 900px) {
        img {

        &:first-child {
            position: absolute;
            margin-left: 20px;
            margin-top: 100px;
            width: 120px;
        }

        &:nth-child(2) {
            margin-left: 65%;
            margin-top: 0;
            width: 70px;
        }

        &:nth-child(3) {
            float: left;
            margin-left: 85%;
            margin-top: 222px;
            width: 250px;
            filter: blur(4px);
        }

        &:nth-child(4) {
            position: absolute;
            margin-left: 30%;
            margin-top: -10px;
            width: 18px;
        }

        &:nth-child(5) {
            position: absolute;
            margin-left: 80%;
            margin-top: 134px;
            width: 18px;
        }

        &:nth-child(6) {
            position: absolute;
            margin-left: 75%;
            margin-top: 475px;
            width: 70px;
        }

        &:nth-child(7) {
            position: absolute;
            margin-left: 10%;
            margin-top: 680px;
            width: 30px;
        }

        &:nth-child(8) {
            position: absolute;
            margin-left: 87%;
            margin-top: 630px;
            width: 30px;
        }
    }  
    }
`

export const Heading = styled.div`
    position: relative;
    width: 56%;
    margin: auto;
    margin-top: 100px;

    @media (max-width: 900px) {
        width: 80%;
    }
`

export const H1 = styled.h1`
    color: white;
    font-family: 'Satoshi', sans-serif;
    text-align: center;
    font-weight: 900;
    font-size: 64px;
    line-height: 85px;

    span {
        color: #A75FD2;
    }

    @media (max-width: 900px) {
        font-size: 44px;
        line-height: 55px;
    }
`
export const Content = styled.div`
    position: relative;
    width: 65%;
    margin: auto;
    margin-top: 20px;
   
   p {
        color: white;
        font-family: 'Satoshi', sans-serif;
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
    }

    @media (max-width: 900px) {
        width: 85%;
        margin-top: 20px;
    
    p {
            font-size: 18px;
            line-height: 24px;
        }
    }
`

export const InputBox = styled.div`
    position: relative;
    width: 443px;
    margin: auto;
    border-radius: 5px;
    border: 1px solid #FFFFFF;
    padding: 18px 0;
    margin-bottom: 30px;
    margin-top: 30px;

    input {
        position: absolute;
        font-family: "Satoshi", sans-serif;
        font-weight: 400;
        font-size: 18px;
        border: none;
        width: 80%;
        background-color: transparent;
        color: #FFFFFF;
        margin-top: -2px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #FFFFFF;
            font-weight: 200;
        }
    } 

    @media (max-width: 900px) {
        width: 60%;
        padding: 12px 0;
        margin-bottom: 25px;
        margin-top: 25px;

        input {
            font-size: 14px;
            margin-top: 0px;
        }
    }
`

export const ButtonBox = styled.div`
    position: relative;
    width: 443px;
    margin: auto;
    margin-top: -35px;

    @media (max-width: 900px) {
        width: 60%;
    }
`