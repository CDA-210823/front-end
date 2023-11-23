import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { TokenService } from "../../services/TokenService.jsx";
const Registration = () => {
    let navigate = useNavigate();
    const regUser = (values) => {
        TokenService.registration(values)
            .then(response => {
                if (response.status === 201) {
                    navigate('/login');
                } else {
                    console.error(response);
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
    const initialValues = {
        email: '',
        username: '',
        password: ''
    };
    const onSubmit = (values) => {
        // console.log(values);
        regUser(values);
    };
    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Email obligatoire'),
        username: yup.string().required('Nom d\'utilisateur obligatoire'),
        password: yup.string().required('Mot de passe obligatoire'),
    });
    return (
        <>
            <h1 className="text-4xl">Registration</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email"/>
                    <ErrorMessage name="email"/>
                    <label htmlFor="username">Username</label>
                    <Field type="text" id="username" name="username"/>
                    <ErrorMessage name="username"/>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password"/>
                    <ErrorMessage name="password"/>
                    <input type="submit" value="Registration"/>
                </Form>
            </Formik>
        </>
    )
}
export default Registration
