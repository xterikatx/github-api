import styled from 'styled-components';

export const Menu = styled.ul`
list-style-type: none;
margin-bottom: 10px;
background-color: #333;

li {
    /* float: left; */
    border-right:1px solid #bbb;
}

/*remove last | */
li:last-child {
    border-right: none;
    
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

a:hover {
    background-color: #111;
}

`;