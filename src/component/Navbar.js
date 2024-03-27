import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const MENU_LIST = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H*M Home', 'Sale', '지속가능성'];
  return (
    <div className='navbarWrap'>
      <h1 className='logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" alt="" />
      </h1>
      <aside className='utils'>
        <button className="btn_login">
          <FontAwesomeIcon icon={ faUser } />
          <span>로그인</span>
        </button>
        <div className='searchBox'>
          <input type="text" placeholder='드레스' />
          <button className="btn_search">
            <FontAwesomeIcon icon={ faMagnifyingGlass} />
          </button>
        </div>
      </aside>
      <div className='menuArea'>
        <ul className='menuList'>
          { MENU_LIST && MENU_LIST.map((menu) => 
            <li key={menu}>{menu}</li>
          )}
        </ul>
      </div>  
    </div>
  )
}

export default Navbar