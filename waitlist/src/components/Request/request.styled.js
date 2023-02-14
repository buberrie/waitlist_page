import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    color: white;
    width: 100%;
    height: 1287px;
    border: 1px solid transparent;
`

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 1024px;

    img {
        display: block;

        &:first-child {
            position: absolute;
            margin-left: 120px;
            margin-top: 182px;
        }

        &:nth-child(2) {
            position: absolute;
            margin-left: 30%;
            margin-top: 305px;
        }

        &:nth-child(3) {
            position: absolute;
            margin-left: 45%;
            margin-top: 780px;
        }

        &:nth-child(4) {
            position: absolute;
            margin-left: 90%;
            margin-top: 1040px;
        }

        &:nth-child(5) {
            position: absolute;
            margin-left: 45%;
            margin-top: 180px;
        } 

        &:nth-child(6) {
            position: absolute;
            margin-left: 90%;
            margin-top: 90px;
        }
    }  

    @media (max-width: 900px) {
        img {
        display: block;

        &:first-child {
            position: absolute;
            margin-left: 120px;
            margin-top: 10px;
            width: 60px;
        }

        &:nth-child(2) {
            position: absolute;
            margin-left: 60%;
            margin-top: 355px;
            width: 25px;
        }

        &:nth-child(3) {
            position: absolute;
            margin-left: 5%;
            margin-top: 780px;
            width: 35px;
        }

        &:nth-child(4) {
            position: absolute;
            margin-left: 90%;
            margin-top: 1240px;
            width: 40px;
        }

        &:nth-child(5) {
            position: absolute;
            margin-left: 50%;
            margin-top: -30px;
            width: 30px;
        } 

        &:nth-child(6) {
            position: absolute;
            margin-left: 90%;
            margin-top: 100px;
            width: 35px;
        }
    }  
    }
`

export const FlexBox = styled.div`
    margin: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 178px;
    

    @media (max-width: 900px) {
        margin-top: 0;
        flex-wrap: nowrap;
        flex-direction: column;
    }
`

export const PriorityArea = styled.div`
    position: relative;
    flex: 1;
    margin: 0 35px 0 85px;

    p {
        font-family: 'Satoshi', sans-serif;
        font-size: 24px;
        font-weight: 500px;
        line-height: 31.2px;
        width: 100%;
    }

    @media (max-width: 900px) {
        margin: 65px;

        p {
            font-size: 18px;
            line-height: 25.2px;
        }
    }
`
export const Img = styled.span`
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%);
    box-shadow: inset 1.4px 2.8px 70px #001D6E;
    filter: blur(144px);
`

export const FormArea = styled.div`
    position: relative;
    flex: 1;
    margin: 0 85px 0 35px;

    @media (max-width: 900px) {
        width: 75%;
        margin: 30px 65px;
    }
`

export const H1 = styled.h1`
    position: relative;
    width: fit-content;

    h1 {
        color: white;
        font-family: 'Satoshi', sans-serif;
        font-weight: 900;
        font-size: 64px;
        line-height: 85px;

        @media (max-width: 1300px) {
            font-size: 44px;
            line-height: 65px;
        }

        @media (max-width: 450px) {
            font-size: 24px;
            line-height: 45px;
        }
    }
`

export const StringDiv = styled.div`
    position: relative;
    text-align: center;

    @media (max-width: 1300px) {
        img {
            width: 120px;
        }

        @media (max-width: 450px) {
            width: 100px;
        }
    }
`