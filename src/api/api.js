import axios from 'axios';

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
    //Authorize : token
    }
})

class Api  {
   static getProducts (){
        return api.get("/products")
    }

    static getProduct (productId){
        return api.get(`/products/${productId}`)
    }

    static staticuserLogin ({mail}){
        return api.post(`/products/}`, {})
    }

    static addProduct({title,price }){
        return api.post(`/products/}`, {title,price})
    }
    
}

export default Api