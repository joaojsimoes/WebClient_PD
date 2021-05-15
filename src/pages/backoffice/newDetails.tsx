import React from 'react'
import { useParams } from 'react-router';
import 'react-table-6/react-table.css'
import styled from 'styled-components';
import { New } from '../../common/interfaces/news.interface';

interface INewAdd {
    editing: boolean; // for formik
}

const NewDetails = ({editing}: INewAdd) => {
    const id = useParams();
    return (<Container>
        <WhiteContainer>
            <Header>
                <Text>New Details {id}</Text>
            </Header>
        </WhiteContainer>
    </Container>);
}

const Container = styled("div")`
    background-image: url(../assets/images/wallpaper2.jpg);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WhiteContainer = styled("div")`
    background-color: white;
    width: 70vw;
    height: 60vh;
    border-radius: 16px;
    box-shadow: 5px 5px 5px lightgrey;
    padding: 32px;
`;

const Header = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const Text = styled("div")`
    font-size: 35px; 
    color: lightgrey;
`;

export default NewDetails;