import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    svg {
        margin: 10px 15px;
    }
`;


export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    padding-bottom:10px;

    input {
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        width: 90%;
        margin-left:3px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`


export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #222;
    border: 0;
    padding: 0;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #333;
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props => props.loading && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
`;

export const List = styled.ul`
    list-style: none;  
    margin-top: 30px;
    padding: 15px;
    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #aaa;
        }
    }

    button {
    background: #222;
    color: #fff;
    border: 0;
    padding: 0;
    width: 100px;
    height: 30px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

        &:hover {
            background: #333;
        }
    }
`;
