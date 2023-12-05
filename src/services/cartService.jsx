import Axios from "./AxiosService.jsx";

export async function addToCart(data)
{
    return await Axios.post('/cart/addProduct', data);
}