import React, { useState, useEffect }  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard';

const ProductAll = ({}) => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    // let url = 'https://my-json-server.typicode.com/shanghanrun/hm_shopping/products';
    let url = 'http://localhost:5000/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList([...data]);
  };
  
  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div>
      <Container>
        <Row>
          {productList && productList.map((item) => 
            <Col key={item.id} lg={3} md={6}>
              <ProductCard item={item} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll