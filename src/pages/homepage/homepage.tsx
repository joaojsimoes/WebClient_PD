import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav';
import News from '../../components/news';

interface IHomepage {

}

const Homepage = ({}: IHomepage) => {
    return ( 
        <Container>
            <Nav />
            <News />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
`;

export default Homepage;