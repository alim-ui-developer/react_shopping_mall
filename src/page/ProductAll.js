import React, { useState, useEffect }  from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = 'https://my-json-server.typicode.com/shanghanrun/hm_shopping/products';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
  };
  
  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div>
      <ProductCard />
    </div>
  )
}

export default ProductAll