import React from 'react'
import styled from 'styled-components';
import { New } from '../common/interfaces/news.interface';
import NewItem from './newItem';

interface INews{
    listOfNews?: New[];
    isLoading?: boolean;
};

const EmptyList = () => {
    return ( 
        <EmptyContainer>
            <Image src="../assets/images/newspaper.png" width="150" height="150"/>
            <EmptyText>Hoje ainda não saiu notícias!!</EmptyText>
        </EmptyContainer>);
};


const News = ({listOfNews=[], isLoading=false}: INews) => {
    return (
        <Container>
            {   listOfNews.length === 0 ? 
                    <EmptyList /> 
                : 
                    listOfNews.map( noticia => <NewItem noticia={noticia} />)
            }
        </Container>
    );
}


const Container = styled('div')`
    width: 60%;
    margin: auto;
`;

const EmptyContainer = styled('div')`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const EmptyText = styled('label')`
    margin-top: 5vh;
    font-size: 35px;
    font-family: "Montserrat", sans-serif;
`;

const Image = styled('img')``;

export default News;
