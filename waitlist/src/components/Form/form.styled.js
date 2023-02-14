import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    color: white;
    width: 100%;
    height: 837px;
    padding: 0px;
    background-color: #1D2939;
    border-radius: 20px;
    flex: 1;

    h1 {
        position: relative;
        font-family: 'Satoshi', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        margin: 65px 0 0 0;
        padding: 0 0 0 10%;

        @media (max-width: 900px) {
        font-size: 20px;
        padding: 0 10%;
    }
}

@media (max-width: 900px) {
        height: 800px;
    }

`

export const FormArea = styled.form`
    text-align: center;
    padding: 10px 10%;

    select {
        border-radius: 5px;
        border: none;
        width: 95%;
        height: 21px;
        background-color: #1D2939;
        color: #FFFFFF;
        font-family: "Satoshi", sans-serif;
        font-weight: 400;
        font-size: 16px;
        

        &:focus {
            outline: none;
        }      

        @media (max-width: 900px) {
            font-size: 14px;
        }
    }

    textarea {
        position: relative;
        border-radius: 5px;
        border: none;
        width: 95%;
        background-color: #1D2939;
        color: #FFFFFF;
        font-family: "Satoshi", sans-serif;
        font-weight: 400;
        font-size: 16px;

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

export const TextArea = styled.div`
    text-align: center;
    position: relative;
    width: 100%; 
    border-radius: 5px;
    border: 1px solid gray;
    padding: 15px 0;
    margin-top: 25px;
`