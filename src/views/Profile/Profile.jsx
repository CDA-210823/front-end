import React from 'react'
import AxiosService from "../../services/AxiosService.jsx";
import {Form} from "formik";

const Profile = () => {
    const [user , setUser] = useState({});
    useEffect(() => {
        Axios.get()
    }, [])
    const validationSchema = yup.object().shape({

    })
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
