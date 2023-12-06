import {Field, Form, Formik, ErrorMessage} from "formik";
import * as yup from 'yup';
import {addOpinionProduct, getDetailsProduct} from "../../services/ProductService.jsx";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
// import Stars from "./Stars.jsx";

// import {useSelector} from "react-redux";

const Opinion = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [loading, setLoading] = useState(true);

    // const userId = useSelector(state => state.user.value);
    // console.log(userId);

    const initialValues = {
        opinion: '',
        note: 1,
    }

    useEffect(() => {
        if (loading) {
            getDetailsProduct(params.id) // récupérer les détails du produit après l'ajout de l'avis
                .then(() => setLoading(false))
        }
    }, [loading, params.id]);

    const onSubmit = (values) => {
        addOpinionProduct(values, params.id)
            .then(() => toast("Votre avis a été ajouté avec succès"))
        setLoading(true);
        navigate(`/show/${params.id}`)
    };

    const validationsSchema = yup.object().shape({
        opinion: yup.string().required("Champs requis"),
        note: yup.number().required("La note ne peut pas être null")
    })

    return (
        <>
            <h1 className="text-5xl  mt-20 font-bold text-center">Avis</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationsSchema}>
                <main className='w-full h-[60vh] flex items-center'>
                    <Form className='w-full'>
                        <div className='flex justify-center'>
                            <div className="bg-detailsProduct rounded-md shadow-boxShadow lg:mt-5 lg:w-2/10 lg:mr-5
                           p-10 sm:mr-0 max-[769px]:w-[90vw]">
                                <div>
                                    <label className='block text-xl font-bold family' htmlFor="opinion">Avis
                                        Global</label>
                                    <Field name='opinion' as='textarea'
                                           className='max-[769px]:w-[70vw] w-[40vw] my-2 h-48'/>
                                    <ErrorMessage name="opinion"/>
                                </div>
                                <div>
                                    <label className='block text-xl font-bold family' htmlFor="note">Note</label>
                                    <Field name='note' type='number' />
                                    <ErrorMessage name="note"/>
                                </div>
                                <div className="row-form flex justify-end">
                                    <input className="buttonProduct" type="submit" value="Valider"/>
                                </div>
                            </div>
                        </div>
                    </Form>
                </main>
            </Formik>
        </>

    )
}
export default Opinion
