import React, {useEffect, useState} from 'react'
import AxiosService from '../../services/AxiosService.jsx';
import {Form, Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {UserService} from '../../services/UserService.jsx';

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [user , setUser] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(UserService.getMail());
        UserService.getId().then(response => {
            console.log(response);
        });
        setLoading(false)
    }, [])
    // const validationSchema = yup.object().shape({
    //
    // })
    const validationSchema = () => {

    }
    const handleSubmit = (values) => {

    }
    const initialValues = {
        firstName: '',
        lastName: '',
        numberStreet: '',
        nameStreet: '',
        postalCode: '',
        city: '',
        email: ''
    }
    return (
        <div>
            <div className="containerDetailsProduct">
                <h1>Profil</h1>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <Form>
                    <input type="text" id="firstName" name="firstName" placeholder="firstName"/>
                    <input type="text" id="lastName" name="lastName" placeholder="lastName"/>
                    <input type="text" id="numberStreet" name="numberStreet" placeholder="N° de rue"/>
                    <input type="text" id="nameStreet" name="nameStreet" placeholder="Nom de rue"/>
                    <input type="text" id="postalCode" name="postalCode" placeholder="code postal"/>
                    <input type="text" id="city" name="city" placeholder="ville"/>
                    <input type="email" id="email" name="email" placeholder="email"/>
                    <input type="button" value="Mettre à jour"/>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default Profile
