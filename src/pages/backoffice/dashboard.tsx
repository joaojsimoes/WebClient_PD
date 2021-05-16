import React from 'react'
import { useHistory } from 'react-router';
import ReactTable, { Column } from 'react-table-6';
import 'react-table-6/react-table.css'
import styled from 'styled-components';
import { New } from '../../common/interfaces/news.interface';

interface IDashboard {

}

const Dashboard = (props: IDashboard) => {
    const history = useHistory();
    const data: New[] =  [
        {
            id: "213123",
            titulo: "New 1",
            subtitulo:  "New 1",
            data: "15/05/2021",
            categoria: "New 1",
            autor: "New 1",
            conteudo: "New 1",
            urlImage: "",
            enable: true,
            numVisualizacoes: 21
        }
    ];
    const columns = [{
        Header: 'Titulo',
        accessor: 'titulo',
    },
    {
        Header: 'Subtitulo',
        accessor: 'subtitulo',
    },
    {
        Header: 'Data Publicação',
        accessor: 'data',
    },
    {
        Header: 'Categoria',
        accessor: 'categoria',
    },
    {
        Header: 'Autor',
        accessor: 'autor',
    },
    {
        Header: 'Nº Visualizações',
        accessor: 'numVisualizacoes',
    }];

    const onClickLine = (id: string) => {
        history.push("/backoffice/new/:id".replace(":id",id));
    }

    return (<Container>
        <WhiteContainer>
            <Header>
                <Text>News</Text>
                <ButtonAdd
                    onClick={() => {
                        history.push("/backoffice/new/add")
                    }}
                >Add new</ButtonAdd>
            </Header>
            <ReactTable
                data={data}
                columns={columns}
                showPagination={true}
                showPaginationBottom={true}
                defaultPageSize={15}
                getTrProps={(state: any,rowInfo: any) => {
                    return {
                      onClick: (e: any, handleOriginal: any) => {
                        console.log('It was in this row:', rowInfo)
                        onClickLine(rowInfo.original.id);
                        // IMPORTANT! React-Table uses onClick internally to trigger
                        // events like expanding SubComponents and pivots.
                        // By default a custom 'onClick' handler will override this functionality.
                        // If you want to fire the original onClick handler, call the
                        // 'handleOriginal' function.
                        if (handleOriginal) {
                          handleOriginal()
                        }
                      }
                    }
                }}
            />
        </WhiteContainer>
    </Container>);
}

const Container = styled("div")`
    background-image: url(../../assets/images/wallpaper2.jpg);
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

const ButtonAdd = styled.button`
    padding: 8px 32px;
    font-size: 16px;
    line-height: 16px;
    height: 32px;
    background-color: lightgreen;
    color: green;
    border: 1px solid green;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        background-color: green;
        color: white;
    }
`;

export default Dashboard;