import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams(); // url에 담겨있는 파라미터값을 가져온다
  const [ product, setProduct ] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  },[])

  return (
    <>
      {product && 
        <Container className='procutDetailWrap'>
          <Row className='topBox'>
            <Col lg={5} className="imageBox">
              <div className='image'>
                <div className="icons">
                  {product.new &&
                    <i className='ico_new'>New</i>
                  }
                  {product.choice && 
                    <i className='ico_choice'>Conscious Choice</i>
                  }
                </div>
                <img src={product.img} alt={product.title} />
              </div>
            </Col>
            <Col lg={7} className='textBox'>
              <div>
                <h2 className='title'>{product.title}</h2>
                <p className='price'>₩{product.price.toLocaleString('ko-KR')}</p>
                <select className='sizeSelectBox'>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
              </div>
              <button className='btn_cart'>장바구니에 추가</button>
            </Col>
          </Row>
          <div className="bottomBox">
            <h3>detail</h3>
            <p>
              <img src={product.img} alt={product.title} />
            </p>
          </div>
        </Container>
      }
    </>
  )
}

// const ProductDetail = ({item}) => {
//   return (
//     <>
//       {item && 
//         <article>
//           <div className="image">
//             <div className="icons">
//               {item.new &&
//                 <i className='ico_new'>New</i>
//               }
//               {item.choice && 
//                 <i className='ico_choice'>Conscious Choice</i>
//               }
//             </div>
//             <img src={item.img} alt={item.title} />
//           </div>
//           <div>
//             <h2 className='title'>{item.title}</h2>
//             <p className='price'>₩{item.price.toLocaleString('ko-KR')}</p>
//             <button>장바구니에 추가</button>
//           </div>
//         </article>
//       }
//     </>
//   )
// }

export default ProductDetail