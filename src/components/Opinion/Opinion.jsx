import {Field, Form, Formik, ErrorMessage} from "formik";
import * as yup from 'yup';
import {addOpinionProduct} from "../../services/ProductService.jsx";
import {toast} from "react-toastify";

const Opinion = () => {
    const initialValues = {
        opinion: '',
        note: 1,
    }
    const onSubmit = (values) => {
        addOpinionProduct(values)
            .then(() => toast("Votre avis a été ajouté avec succès"))
    };

    const validationsSchema = yup.object().shape({
        opinion: yup.string().required("Champs requis"),
        // note: yup.number().required("La note ne peut pas être null")
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
                                    <Field name='note' />
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
