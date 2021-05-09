import React from 'react'
import styled from 'styled-components';

interface INav {
    listOfOptions?: string[];
}

const Nav = ({listOfOptions=[]}: INav) => {
    return (
        <Header>
            <Logo>NewsLetter</Logo>
            <NavigationBar>
                <ListContainer>
                    {listOfOptions.map(value => <Option><a>{value}</a></Option>)}
                </ListContainer>
            </NavigationBar>
            <LinkLogin href="/backoffice">Login</LinkLogin>
        </Header>
    );
}

const Header = styled("header")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20%;
    background-color: #24252a;
`;

const NavigationBar = styled("nav")`

`;

const Logo = styled("label")`
    cursor: pointer;
    color: white;
    font-size: 35px;
    line-height: 80px;
    font-weight: bold;
`;

const ListContainer = styled("ul")`
    color: white;
    text-decoration: none;
    list-style: none;
    display: flex;
`;

const Option = styled("li")`
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 500;
    padding: 0px 20px;
    a{
        transition: color 0.3s ease 0s;   
    } 
    :hover {
        color: #0088a9;
    }
`;


const LinkLogin = styled("a")`
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    padding: 9px 25px;
    background-color: rgba(0, 136, 169, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
    :hover{
        background-color: rgba(0, 136, 169, 0.8);
    }
`;

export default Nav;

