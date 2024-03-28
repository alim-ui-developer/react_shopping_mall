import React from 'react'

const ProductDetail = () => {
  return (
    <article className='procutDetailWrap'>
      <div className="topBox">
        <div className="imageBox">
          <div className="icons">
            <i className='ico_new'>New</i>
            <i className='ico_choice'>Conscious Choice</i>
          </div>
          <img src='https://noona-hnm.netlify.app/ankle-jeans.jpeg' alt='슬림핏 맘 하이웨이스트 앵클 진' />
        </div>
        <div className='textBox'>
          <div>
            <h2 className='title'>슬림핏 맘 하이웨이스트 앵클 진</h2>
            <p className='price'>₩{(29900).toLocaleString('ko-KR')}</p>
            <button className='btn_sizeSelect'>사이즈 선택 &gt;</button>
          </div>
          <button className='btn_cart'>장바구니에 추가</button>
        </div>
      </div>
      <div className="bottomBox">
        <h3>detail</h3>
        <p>
        <img src='https://noona-hnm.netlify.app/ankle-jeans.jpeg' alt='슬림핏 맘 하이웨이스트 앵클 진' />
        </p>
      </div>
    </article>
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