import React, { useState, useEffect }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import ProductCard from '../component/ProductCard';
import { Link, useSearchParams } from 'react-router-dom';



const ProductAll = ({authenticate}) => {  
  const [ productList, setProductList ] = useState([]);
  const [ query, setQuery ] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q');
    if(searchQuery === null){
      searchQuery = '';
    }
    let url = `https://my-json-server.typicode.com/alim-ui-developer/react_shopping_mall//products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    setProductList([...data]);
  };
  
  useEffect(() => {
    getProducts();
  },[query]);

  return (
    <Container className='procutAllWrap'>
      <Row>
        {/* 상품 목록 보여주기 */}
        {productList && productList.map((item) => 
          <Col key={item.id} lg={3} md={6}>
            <ProductCard item={item} />
          </Col>
        )}
        {/* 검색한 상품이 없을 때 */}
        {productList.length <= 0 && authenticate === false && 
        <article className='searchProductEmptyBox'>
          <div>
            <i><FontAwesomeIcon icon={ faFaceSadTear } /></i>
            <p>검색하신 상품이 없습니다</p>
            <Link to='/' className='btn_allProductList'>전체 상품 보러가기 &gt;</Link>
          </div>
        </article>
        }
      </Row>
    </Container>
  )
}

export default ProductAll