import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { New } from '../../common/interfaces/news.interface';
import Nav from '../../components/nav';
import News from '../../components/news';
import { IStore } from '../../config/store';
import { NewsApi } from '../backoffice/news.api';
import { NewsActions } from '../backoffice/news.store';

interface IHomepage {

}

const Homepage = (props: IHomepage) => {
    const dispatch = useDispatch();
    const news: New[] = useSelector((store: IStore) => store.newsReducer.news);
    const isLoading: boolean = useSelector((store: IStore) => store.newsReducer.isLoading);
    
    useEffect(() => {
         dispatch(NewsActions.creators.fetchNews())
         NewsApi.methods.getNews().then(
             res => {
                 dispatch(NewsActions.creators.fetchNewsSuccess(res.data));
             },
             err => {
                 dispatch(NewsActions.creators.fetchNewsError());
             }
         )
     }, [])

    return ( 
        <Container>
            <Nav />
            <News listOfNews={news} isLoading={isLoading} />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
`;

export default Homepage;