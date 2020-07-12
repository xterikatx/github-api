import styled from 'styled-components';

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

    a {
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
    text-decoration: none;

        &:hover {
            background: #333;
        }
    }
`;

export const Loading = styled.div`
    color: #222;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Owner = styled.div``;