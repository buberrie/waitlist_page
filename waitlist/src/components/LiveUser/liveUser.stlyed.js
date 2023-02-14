import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: fit-content;
    margin: auto;
    margin-top: 20px; 

    
    @media (max-width: 850px) {
        margin-top: 15px; 
    }
`

export const UserIcon = styled.div`
    display: flex;
    margin-left: 85px;
`

export const Joined = styled.div`
    p {
        font-family: "Satoshi", sans-serif;
        font-size: 16px;
        font-weight: 700;
        margin-left: 45px;

        @media (max-width: 850px) {
        font-size: 14px;
    }
    }
`