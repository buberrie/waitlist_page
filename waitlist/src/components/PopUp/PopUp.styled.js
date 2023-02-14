import styled from "styled-components";

export  const Wrapper = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    margin-top: 100px;
`

export const Box = styled.div`
    width: 446px;
    height: 475px;
    opacity: ${({popIn}) => (popIn ? "1" : "0")};
    background-color: #15141B;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    margin: auto;
    -webkit-animation: easeIn 750ms; 
    animation: easeIn 750ms;
    -webkit-animation: ${({easeOut}) => (easeOut ? "" : "easeOut 500ms")};
    animation: ${({easeOut}) => (easeOut ? "" : "easeOut 500ms")};
    
        @-webkit-keyframes easeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes easeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @-webkit-keyframes easeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }

        @keyframes easeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }

        @media (max-width: 1300px) {
            width: 346px;
            height: 375px;
        }

        @media (max-width: 900px) {
            width: 246px;
            height: 275px;
        }
`

export const CheckBox = styled.div`
    width: 88px;
    display: flex;
    height: 88px;
    margin: auto;
    margin-top: 102px;
    background-color: #20AC5B;
    border: 10px solid rgba(255, 255, 255, 0.15);
    box-shadow: inset 0px -5px 20px #000000;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    img {
        width: 44px;
        height: 33.44px;
    }

    @media (max-width: 1300px) {
        margin-top: 82px;
        width: 78px;
        height: 78px;

        img {
        width: 35px;
        height: 28.44px;
        }
    }

    @media (max-width: 900px) {
        margin-top: 52px;
        width: 68px;
        height: 68px;

        img {
        width: 30px;
        height: 25.44px;
        }
    }
`

export const Circle = styled.div`
    position: absolute;
    margin: auto;
    align-self: center;
    width: 97px;
    height: 98px;
    margin-top: 75px;
    margin-left: 175px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.33);
    filter: blur(92px);

        @media (max-width: 1300px) {
            width: 87px;
            height: 88px;
            margin-top: 60px;
            margin-left: 130px;
        }

        @media (max-width: 900px) {
            width: 77px;
            height: 78px;
            margin-top: 30px;
            margin-left: 85px;
        }

`

export const Message = styled.div`
    width: 80%;
    margin: auto;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Satoshi', sans-serif;
    font-size: 16px;
    margin-top: 64px;
    line-height: 21.6px;

    p {
        &:first-child {
            font-size: 24px;
            font-weight: 700;
            line-height: 32.4px;
            margin-bottom: 5px;
        }
    }

    @media (max-width: 1300px) {
        font-size: 14px;
        margin-top: 40px;

        p {
            &:first-child {
                font-size: 22px;
            }
        }
        }

        @media (max-width: 900px) {
            font-size: 12px;
            margin-top: 20px;
            line-height: 15.4px;

        p {
            &:first-child {
                font-size: 18px;
                line-height: 28.4px;
            }
        }
    }
`