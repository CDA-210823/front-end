import Axios from '/src/services/AxiosService.jsx';

export async function addProduct(data)
{
    for (const value of data.values()) {
        console.log(value);
    }
    return await Axios.post('/product/new', {data})
}

export async function getLastProducts()
{
    return await Axios.get('/product/getByDate')
}

export async function getDetailsProduct(id)
{
    return await Axios.get(`/product/show/${id}`)
}

export async function addOpinionProduct(data)
{
    return await Axios.post(`/opinion/new`, data)
}