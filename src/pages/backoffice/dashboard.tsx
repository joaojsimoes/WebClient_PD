import React from 'react'
import styled from 'styled-components';

interface IDashboard {

}

const Dashboard = ({}: IDashboard) => {
    return (<Container>
        White
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

export default Dashboard;