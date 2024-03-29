import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const ProductDetailTextBox = ({product}) => {
  const stockText = () => {
    if(product.stock === 0){
      return '매장 내 재고가 없습니다.'
    }else if(product.stock <= 100){
      return '매장 내 재고가 거의 없습니다.';
    }else{
      return '매장 내 재고가 있습니다.'
    }
  }
  return (
    <>
      <div>
        <h2 className='title'>{product.title}</h2>
        <p className='price'>₩{product.price.toLocaleString('ko-KR')}</p>
        <div className="optionBox">
          <h3>색상</h3>
          <select className='sizeSelectBox'>
          {product.color.map((color) => 
              <option key={`${product.name}color`} value={color}>{color}</option>
            )}
          </select>
        </div>
        <div className="optionBox">
          <h3>사이즈</h3>
          <select className='sizeSelectBox'>
            {product.size.map((size) => 
              <option key={`${product.name}size`} value={size}>{size}</option>
            )}
          </select>
        </div>
        <div className="text">
          <p>
            <i><FontAwesomeIcon icon={faBell} /></i>
            <span>{stockText()}</span></p>
          <p>
            <i><FontAwesomeIcon icon={faPaperPlane} /></i>
            <span>배송 기간: 영업일 기준 2-3일</span>
          </p>
        </div>
      </div>
      <button className='btn_cart'>장바구니에 추가</button>
    </>
  )
}

export default ProductDetailTextBox