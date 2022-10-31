import React , {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../api/api';
import Wrapper from '../components/Wrapper';

function Product(props) {
   const {productId} = useParams()

   const [loading, setLoading] = useState(false);
   const [product, setProduct] = useState({});

console.log(productId)
    useEffect(()=>{
    (async()=>{
        const {data} = await Api.getProduct(productId)

        setProduct(data)
    })()
    }, [])

    console.log(product)
    return (
        <div>
       <img className='image-product' src={product.image}/>
       <h4 className='price-product'>{product.price} $</h4>
       <h3 className='category-product'>{product.category}</h3>
       <p>{product.description}</p>
        </div>
    );
}

export default Product;