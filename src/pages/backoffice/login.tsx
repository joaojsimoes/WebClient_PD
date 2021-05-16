import { Formik } from 'formik';
import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';

interface ILogin {

}

interface IUser{
    email?: string;
    password?: string;
}

const LoginPage = (props: ILogin) => {
    const history = useHistory();
    return (<Container>
        <LoginContainer>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors: IUser = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        history.push("/backoffice/dashboard");
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
                        <h1>Login</h1>
                        <label>Email</label>
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email}
                        <label>Password</label>
                        <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password}
                        <Button type="submit" disabled={isSubmitting}>
                            Entrar
                        </Button>
                    </Form>
                )}
            </Formik>
        </LoginContainer>
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

const LoginContainer = styled("div")`
    background-color: white;
    border-radius: 16px;
    width: 500px;
    height: 400px;
    box-shadow: 5px 5px 5px lightgrey;
`;

const Form= styled("form")`
    display: flex;
    flex-direction: column;
    padding: 32px;
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

export default LoginPage;