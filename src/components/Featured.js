import React, {useState, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import Api from '../api/api';
import images from '../assets/images/loading.png';

const productType = [ "all", "jewelery", "men's clothing", "women's clothing", "electronics" ] 

const Featured = () => {
  const [loading, setLoading] = useState(false);
  const [currentType, setCurrentType] = useState("all");
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);



  useEffect(()=>{
      (async()=>{
        setLoading(true);

        const {data} = await Api.getProducts()
        setProducts(data)
        setFiltredProducts(data)

        setLoading(false);
      })()
  },[])


  const setType = (type)=>{
    setCurrentType(type)
    
    if(type === "all"){
      setFiltredProducts(products)
    } else {
      setFiltredProducts(products.filter(({category}) => category === type))
    }
  }

  console.log(filtredProducts)
    return (
    
    <div className='products-container'>
    {loading && (
        <div>
        {" "}
        <img  className='loading' src = {images} alt = '' />
        </div>
   
    )}
    
    {productType.map(type=>(
      <button
      style={{background: currentType === type ? "#3a8bcd" : "#8f8f8f"}}
       className ='products-button'
       onClick={()=>setType(type)}
      >
        {type}
      </button>
    ))}
    
<div className='products-wrapper'>
   {filtredProducts.map(({id, image, title, price, category})=> (
        <NavLink
          key={id} 
          className='card' 
          to={`/products/${id}`} 
        >
          <div>
            <img 
              className='images1'
              src ={image } 
              alt ='product img'
             />
          </div>

          <div className='card-description'>
            <h5 className='products-title'>{title}</h5>

            <h4 className ='products-price'>{`Price: ${price}`} $</h4>

            <h3 className ='products-category'>{`Category: ${category}`}</h3>
          </div>
        </NavLink>
    ))}
</div>
   
   </div>
  );
};

export default Featured;