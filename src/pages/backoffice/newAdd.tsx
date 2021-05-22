import { Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { New } from '../../common/interfaces/news.interface';
import { NewsApi } from './news.api';
import { NewsActions } from './news.store';

interface INewAdd {
}

const NewAdd = (props: INewAdd) => {
    const history = useHistory();
    const noticia: New ={};
    const dispatch = useDispatch();

    const goBack = () => {
        history.goBack();
    }

    const createNew = (values: New) => {
        /*NewsApi.methods.addNew(values).then(
            res => {*/values.id = "dasdas";
                dispatch(NewsActions.creators.addNew(values));
                history.push("/backoffice/dashboard");
            /*},
            (err) => {

            }
        )*/
    }

    return (<Container>
        <WhiteContainer>
            <Header>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <GoBackIcon onClick={goBack}>{"<"}</GoBackIcon>
                    <Text style={{marginLeft: "8px"}}>Add New</Text>
                </div>
            </Header>
            <Formik
                initialValues={noticia}
                validate={values => {
                   const errors: New = {};
                    if (!values.titulo) {
                        errors.titulo = 'Required';
                    }
                    if (!values.subtitulo) {
                        errors.subtitulo = 'Required';
                    }
                    if (!values.autor) {
                        errors.autor = 'Required';
                    }
                    if (!values.categoria) {
                        errors.categoria = 'Required';
                    }
                    if (!values.data) {
                        errors.data = 'Required';
                    }
                    if (!values.conteudo) {
                        errors.conteudo = 'Required';
                    }
                    if (!values.urlImage) {
                        errors.urlImage = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        createNew(values);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Titulo</label>
                        <Input
                            type="text"
                            name="titulo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.titulo}
                        />
                        <TextRequired>{errors.titulo}</TextRequired>
                        <label>Subtitulo</label>
                        <Input
                            type="text"
                            name="subtitulo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subtitulo}
                        />
                        <TextRequired>{errors.subtitulo}</TextRequired>
                        <label>Data</label>
                        <Input
                            type="text"
                            name="data"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.data}
                        />
                        <TextRequired>{errors.data}</TextRequired>
                        <label>Categoria</label>
                        <Input
                            type="text"
                            name="categoria"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.categoria}
                        />
                        <TextRequired>{errors.categoria}</TextRequired>
                        <label>Conteudo</label>
                        <Input
                            type="text"
                            name="conteudo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.conteudo}
                        />
                        <TextRequired>{errors.conteudo}</TextRequired>
                        <label>Autor</label>
                        <Input
                            type="text"
                            name="autor"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.autor}
                        />
                        <TextRequired>{errors.autor}</TextRequired>
                        <label>Url Image</label>
                        <Input
                            type="text"
                            name="urlImage"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.urlImage}
                        />
                        <TextRequired>{errors.urlImage}</TextRequired>
                        <Button type="submit" disabled={isSubmitting}>
                            Submeter
                        </Button>
                    </Form>
                )}
            </Formik>
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
    width: 40vw;
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

const Input= styled("input")`
    padding: 12px;
    border-radius: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    :focus{
        border: 1px solid #0088a9;
        outline: none!important;
    }
`;

const Button = styled("button")`
    padding: 12px;
    border-radius: 16px;
    background-color: lightblue;
    border: 1px solid lightblue;
    margin-top: 8px;
    color: white;
    font-size: 16px;
    :hover{
        cursor: pointer;
        background-color: #0088a9;
    }
`;

const Form= styled("form")`
    display: flex;
    flex-direction: column;
    width: 40vw;
`;

const TextRequired =styled.div`
    color: red;
`;

const GoBackIcon = styled.div`
    font-size: 30px;
    font-family: bold;
    width: 15px;
    height: 32px;
    color: #0088a9;
    cursor: pointer;
`;
export default NewAdd;