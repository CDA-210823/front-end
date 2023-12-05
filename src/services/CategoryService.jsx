import Axios from '/src/services/AxiosService.jsx';

export async function getAllCategories()
{
    return await Axios.get('/category')
}