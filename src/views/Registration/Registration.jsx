import {ErrorMessage, Field, Form, Formik} from 'formik';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import {TokenService} from "../../services/TokenService.jsx";

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
        regUser(values);
    };
    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Email obligatoire'),
        password: yup.string().required('Mot de passe obligatoire'),
    });
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
               <div className='w-full h-[90vh] flex items-center' >
                   <Form className='w-full'>
                       <div className="flex lg:flex-row ml-10 justify-around lg:items-center">
                           <div className="bg-detailsProduct rounded-md shadow-boxShadow lg:mt-5 lg:w-1/3 lg:mr-5
                           p-10 sm:w-2/3 sm:mr-0 max-[769px]:mx-auto"  >
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
                           <div className='max-[769px]:hidden'>
                               <img src="/src/assets/images/Authentification/register.svg" alt=""/>
                           </div>
                       </div>
                   </Form>
               </div>

            </Formik>
        </>
    )
}
export default Registration
