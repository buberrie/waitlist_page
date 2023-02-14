import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    border: none;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin-right: -55px;

    @media (max-width: 850px) {
        margin-right: -50px;
    }
`

export const UserIcon = styled.div`
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: auto;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Satoshi", sans-serif;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    background-color: #A75FD2;

    @media (max-width: 850px) {
        width: 25px;
        height: 25px;
        font-size: 12px;
    }
`