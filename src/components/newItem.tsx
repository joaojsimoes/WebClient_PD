import React from 'react';
import styled from 'styled-components';
import { New } from '../common/interfaces/news.interface';

interface INewItem{
    noticia: New;
}

const NewItem = ( { noticia }: INewItem) => {
    return (
        <Container>
            <ImgContainer>
                <Img imgUrl={noticia.urlImage? noticia.urlImage:''} />
            </ImgContainer>
            <ContentContainer>
                <TitleContainer>{noticia.titulo}</TitleContainer>
                <SubtitleContainer>{noticia.subtitulo}-{noticia.categorias}</SubtitleContainer>
                <hr style={{border: "1px solid rgba(0,136,169,1)"}}/>
                <Content>{noticia.conteudo}</Content>
                
                <hr style={{border: "1px solid rgba(0,136,169,1)",position: "absolute",bottom: "32px",width: "48.5%"}}/>
                <Footer>{noticia.autor}-{noticia.data}</Footer>
            </ContentContainer>
        </Container>
    );
}

const Container = styled("div")`
    display: flex;
    flex-direction: row;
    margin: 16px 0;
    border: 1px solid rgba(0,136,169,1);
    border-radius: 16px;
    padding: 24px 16px;
    position: relative;
`;

const ImgContainer = styled("div")`
    width: 50%;
    min-height: 350px;
`;

const ContentContainer = styled("div")`
    width: 50%;
`;

const Img = styled("div")<{
    imgUrl: string
}>
`   
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(${props=> props.imgUrl});
`;

const TitleContainer = styled("div")`
    font-size: 48px;
`;

const SubtitleContainer = styled("div")`
    font-size: 24px;
    line-height: 32px;
`;

const Content = styled("div")`
    font-size: 16px;
    margin-top: 8px;
`;

const Footer = styled("div")`
    font-size: 16px;
    position: absolute;
    bottom: 16px;
    right: 16px;
`;

export default NewItem;