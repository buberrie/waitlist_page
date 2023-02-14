import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 15px 0;
    margin-top: 25px;
 
    input {
        position: relative;
        font-family: "Satoshi", sans-serif;
        font-weight: 400;
        font-size: 16px;
        border: none;
        width: 95%;
        background-color: #1D2939;
        color: #FFFFFF;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #FFFFFF;
            font-weight: 200;
        }

        @media (max-width: 900px) {
            font-size: 14px;
        }
    }
`