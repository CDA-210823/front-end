// eslint-disable-next-line no-unused-vars
import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {TokenService} from '../../services/TokenService';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';
const Login = () => {
    let navigate = useNavigate();
    const login = (values) => {
        TokenService.login(values)
            .then(response => {
                TokenService.setToken(response.data.token);
                navigate('/');
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };
    const initialValues = {
        email: '',
        password: ''
    };
    const onSubmit = (values) => {
        login(values);
    };
    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Email obligatoire'),
        password: yup.string().required('Mot de passe obligatoire'),
    });
    return (
        <>
            <h1 className="text-4xl">Login</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email"/>
                    <ErrorMessage name="email"/>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password"/>
                    <ErrorMessage name="password"/>
                    <input type="submit" value="Login"/>
                </Form>
            </Formik>
        </>
    );
};
export default Login;
