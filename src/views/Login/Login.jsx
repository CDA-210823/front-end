import {ErrorMessage, Field, Form, Formik} from 'formik';
import {TokenService} from '../../services/TokenService';
import {Link, useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';
import {isLoggedIn} from '../../store/LoggedSlice.jsx';
import { regUser } from '../../store/UserSlice.jsx';
import {UserService} from '../../services/UserService.jsx';
const Login = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const storeUser = useSelector(state => state.user);
    const login = (values) => {
        TokenService.login(values)
            .then(response => {
                localStorage.setItem('email', values.email);
                TokenService.setToken(response.data.token);
                const connected = TokenService.isLogged();
                UserService.getUser().then(ret => {
                    console.log(ret.data);
                    dispatch(regUser(ret.data));
                });
                dispatch(isLoggedIn(connected));
                navigate('/');
                toast('Vous êtes maintenant connecté !');
            })
            .catch(error => {
                toast('Une erreur est survenue lors de la connexion, veuillez réessayer.');
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
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <main className='w-full h-[90vh] flex items-center'>
                    <Form className='w-full'>
                        <div className="flex  justify-end w-full">
                            <div className="bg-detailsProduct rounded shadow-boxShadow max-[769px]:w-2/3 max-[769px]:mx-auto w-1/3 mr-10 p-10">
                                <h1 className="text-2xl font-bold text-center">Connexion</h1>
                                <div className="row-form">
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" id="email" name="email"/>
                                    <ErrorMessage name="email"/>
                                </div>
                                <div className="row-form">
                                    <label htmlFor="password">Mot de passe </label>
                                    <Field type="password" id="password" name="password"/>
                                    <ErrorMessage name="password"/>
                                </div>
                                <div className="row-form">
                                    <input className="buttonProduct" type="submit" value="Connexion"/>
                                </div>
                                <div className='row-form text-right'>
                                    <Link to="/forgot-password" className="text-right text-resetPassword">Mot de passe oublié ?</Link>
                                </div>
                            </div>
                        </div>
                    </Form>
                </main>
            </Formik>
        </>
    );
};
export default Login;
