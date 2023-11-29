import {ErrorMessage, Field, Form, Formik} from 'formik';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import {TokenService} from "../../services/TokenService.jsx";
import {toast} from "react-toastify";

const Registration = () => {
    let navigate = useNavigate();
    const regUser = (values) => {
        TokenService.registration(values)
            .then(response => {
                if (response.status === 201) {
                    navigate('/login');
                } else {
                    toast('Une erreur est survenue ! ' + response.data.message);
                }
            })
            .catch(error => {
                toast('Une erreur est survenue ! ' + error.message);
            })
    }
    const initialValues = {
        email: '',
        username: '',
        password: ''
    };
    const onSubmit = (values) => {
        regUser(values);
    };
    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Email obligatoire'),
        password: yup.string().required('Mot de passe obligatoire'),
    });
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className="flex lg:flex-row ml-10 lg:items-center all:w-full all:h-full all:flex-col">
                        <div className="bg-detailsProduct rounded-md shadow-boxShadow lg:mt-5 lg:w-1/3 lg:mr-5 p-10 sm:w-full sm:mr-0 all:p-1">
                            <h1 className="text-2xl font-bold text-center">Inscription</h1>
                            <div className="row-form">
                                <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email"/>
                                <ErrorMessage name="email"/>
                            </div>
                            <div className="row-form">
                                <label htmlFor="password">Mot de passe</label>
                                <Field type="password" id="password" name="password"/>
                                <ErrorMessage name="password"/>
                            </div>
                            <div className="row-form">
                                <input className="buttonProduct" type="submit" value="Registration"/>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default Registration
