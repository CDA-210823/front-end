import React from 'react'
import {Field, Form, Formik} from "formik";
import {addProduct} from "../../../services/ProductService.jsx";

const AddProduct = () => {
    const initialValues = {
        name: '',
        image: '',
        description: '',
        price: 0,
        category: 1,
        stock: 100,
    };
    function submit(values)
    {
        let formData = new FormData();
        formData.append('category', values.category)
        formData.append('name', values.name)
        formData.append('description', values.description)
        formData.append('stock', values.stock)
        formData.append('price', values.price)
        formData.append('image', values.image)

        for (const value of formData.values()) {
            console.log(value);
        }
        addProduct(formData).then(r => console.log(r))
    }

    return (
        <Formik initialValues={initialValues} onSubmit={submit}>
            <Form>
                <label htmlFor="name">Nom du téléphone:</label>
                <Field type="text" id="name" name="name"/>

                <label htmlFor="image">Image:</label>
                <Field type="file" id="image" name="image"/>

                <label htmlFor="description">Description:</label>
                <Field type="text" id="description" name="description"/>

                <label htmlFor="price">Prix:</label>
                <Field type="number" id="price" name="price"/>

                <label htmlFor="category">Catégory:</label>
                <Field type="number" id="category" name="category"/>

                <label htmlFor="stock">Stock:</label>
                <Field type="number" id="stock" name="stock"/>

                <input type="submit" name="submit" value="Ajouter"/>
            </Form>
        </Formik>
    )
}
export default AddProduct
