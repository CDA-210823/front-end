import Axios from '/src/services/AxiosService.jsx';

export async function addProduct(data)
{
    return await Axios.post('/product/new', {data})
}