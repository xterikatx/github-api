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

export const Loading = styled.div`
    color: #222;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }
    h3 {
        font-size: 24px;
        margin-top: 10px;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const ContributorsList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
    h3 {
        text-align: center;
    }
    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
        
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
        }

        div {
            flex: 1;
            margin-left: 15px;
        }

        strong {
            font-size: 16px;
        }

        a {
            text-decoration: none;
            color: #222;
                
            &:hover{
                color: lightgrey;
            }
        }
       
    }
`;

export const PullList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
    h3 {
        text-align: center;
    }
    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
        
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
        }

        div {
            flex: 1;
            margin-left: 15px;
        }

        strong {
            font-size: 16px;
        }

        a {
            text-decoration: none;
            color: #222;
                
        }
       
    }
`;