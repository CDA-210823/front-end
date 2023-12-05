import React, {useEffect, useState} from 'react'
import {Field, Form, Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {UserService} from '../../services/UserService.jsx';
import * as yup from 'yup';
import { regUser } from '../../store/UserSlice.jsx';
const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(0);
    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    const storeUser = useSelector(state => state.user);
    let initialValues = {
        firstName: (storeUser.firstName) ?? '',
        lastName: (storeUser.lastName) ?? '',
        address: {
            numberStreet: (storeUser.address.numberStreet) ?? '',
            nameStreet: (storeUser.address.nameStreet) ?? '',
            postalCode: (storeUser.address.postalCode) ?? '',
            city: (storeUser.address.city) ?? '',
        },
        email: (storeUser.email) ?? '',
    }
    useEffect(() => {
        setLoading(false)
    }, []);
    const validationSchema = yup.object().shape({
            firstName: yup.string()
                .min(2, 'Le prénom est trop court')
                .max(50, 'Le prénom est trop long')
                .required('Required'),
            lastName: yup.string()
                .min(2, 'Le nom est trop court!')
                .max(50, 'Too Long!')
                .required('Required'),
            email: yup.string().email('Invalid email').required('Required'),
        address: yup.object().shape({
            numberStreet: yup.string().required('Required'),
            nameStreet: yup.string().required('Required'),
            postalCode: yup.string().required('Required'),
            city: yup.string().required('Required'),
        })
        });

    const handleSubmit = (values) => {

    }
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="containerDetailsProduct">
                <h1>Profil</h1>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <Form>
                        <Field type="text" id="firstName" name="firstName" placeholder="firstName"/>
                        <Field type="text" id="lastName" name="lastName" placeholder="lastName"/>
                        <Field type="text" id="address.numberStreet" name="address.numberStreet" placeholder="N° de rue"/>
                        <Field type="text" id="address.nameStreet" name="address.nameStreet" placeholder="Nom de rue"/>
                        <Field type="text" id="address.postalCode" name="address.postalCode" placeholder="code postal"/>
                        <Field type="text" id="address.city" name="address.city" placeholder="ville"/>
                        <Field type="email" id="email" name="email" placeholder="email"/>
                        <Field type="button" value="Mettre à jour"/>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
export default Profile;
