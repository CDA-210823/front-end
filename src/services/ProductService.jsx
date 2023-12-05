import Axios from '/src/services/AxiosService.jsx';

export async function addProduct(data)
{
    return await Axios.post('/product/new', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }})
}

export async function getLastProducts()
{
    return await Axios.get('/product/getByDate')
}

export async function getDetailsProduct(id)
{
    return await Axios.get(`/product/show/${id}`)
}

export async function addOpinionProduct(data, id)
{
    return await Axios.post(`/opinion/new/${id}`, data)
}