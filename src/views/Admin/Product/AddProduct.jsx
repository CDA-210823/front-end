import React, {useEffect, useState} from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {addProduct} from "../../../services/ProductService.jsx";
import {getAllCategories} from "../../../services/CategoryService.jsx";
import {toast} from "react-toastify";

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    const [image, setImage] = useState('');
    const initialValues = {
        name: '',
        image: '',
        description: '',
        price: 0,
        category: 1,
        stock: 100,
    };

    useEffect(() => {
        getAllCategories()
            .then(r => {
                setCategories(r.data)
            })
    }, []);
    function submit(values)
    {
        let formData = new FormData();
        formData.append('category', values.category);
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('stock', values.stock);
        formData.append('price', values.price);
        formData.append('image', image);

        addProduct(formData).then((() => toast('Le produit à bien été ajouter')));
    }

    return (
        <>
            <h1 className="text-5xl  mt-20 font-bold text-center">Ajouter un produit</h1>
            <Formik initialValues={initialValues} onSubmit={submit}>
                <div className='w-full h-[60vh] flex items-center mt-20'>
                    <Form className='w-full' encType="multipart/form-data">
                        <div className='flex justify-center'>
                            <div className="bg-detailsProduct rounded-md shadow-boxShadow lg:mt-5 lg:w-2/10 lg:mr-5
                           p-10 sm:mr-0 max-[769px]:w-[90vw] w-1/2">
                                <div className={"my-4"}>
                                    <label className='block text-xl font-bold family' htmlFor="name">Nom du produit</label>
                                    <Field name='name'/>
                                </div>

                                <div className={"my-4"}>
                                    <label className='block text-xl font-bold family' htmlFor="description">Description</label>
                                    <Field name='description' as='textarea'
                                           className='max-[769px]:w-[70vw] w-[40vw] my-2 h-48'/>
                                </div>

                                <div className={"my-4"}>
                                    <label className='block text-xl font-bold family' htmlFor="stock">Stock</label>
                                    <Field name='stock' type={'number'}/>
                                </div>

                                <div className={"my-4"}>
                                    <label className='block text-xl font-bold family' htmlFor="price">Prix</label>
                                    <Field name='price' type={'number'}/>
                                </div>

                                <div className={"my-4"}>
                                    <label className='block text-xl font-bold family' htmlFor="note">Catégorie</label>
                                    <Field as="select" name="color">
                                        {categories.map((category) => {
                                            return <option key={category.id} value={category.id}>{category.name}</option>
                                        })}
                                    </Field>
                                </div>

                                <div className={"my-4"}>
                                    <label className='block text-xl font-bold family' htmlFor="image">Stock</label>
                                    <input type='file' onChange={(e) => setImage(e.target.files[0]) }/>
                                </div>

                                <div className="row-form flex justify-end">
                                    <input className="buttonProduct" type="submit" value="Valider"/>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
export default AddProduct
