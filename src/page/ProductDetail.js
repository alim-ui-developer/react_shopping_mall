import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import ProductDetailImageBox from '../component/ProductDetailImageBox';
import ProductDetailTextBox from '../component/ProductDetailTextBox';
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetail = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  let { id } = useParams(); // url에 담겨있는 파라미터값을 가져온다
  const [ product, setProduct ] = useState(null);
  const getProductDetail = async () => {
    setIsLoading(true);
    let url = `https://my-json-server.typicode.com/alim-ui-developer/react_shopping_mall/products/${id}`
    // let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setIsLoading(false);
    setProduct(data);
  }
  
  useEffect(() => {
    getProductDetail();
  },[])

  return (
    <>
      {product && 
        <Container className='procutDetailWrap'>
          {isLoading ? 
            <ClipLoader color="crimson" size={50} className='loadingSpinner' /> :
            <Row className='topBox'>
              <Col lg={5} className="imageBox">
                <ProductDetailImageBox product={product} />
              </Col>
              <Col lg={7} className='textBox'>
              <ProductDetailTextBox product={product} />
              </Col>
            </Row>
          }
          <div className="bottomBox">
            <h3>detail cut</h3>
            {isLoading ? 
              <ClipLoader color="crimson" size={50} className='loadingSpinner' /> :
              <p>
                <img src={product.img} alt={product.title} />
              </p>
            }
          </div>
        </Container>
      }
    </>
  )
}

export default ProductDetail