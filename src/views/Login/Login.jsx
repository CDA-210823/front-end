import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const initialValues = {
    email: '',
    password: '',
}
const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
})
const handleSubmit = (values) => {

}


const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name="email" type="email" id="email" placeholder="Email" />
                    <Field name="password" type="password" id="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default Login
