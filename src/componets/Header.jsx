

import logo from '../img/favicon.png'
import { useState } from 'react';
import { Link } from 'react-scroll'

function Header() {

  const [hide,sethide] = useState(false)

  const condition =  `querystyle ${hide && 'show' } `
  const hideState = ()=>{
    sethide(false)
  }
  const showState = ()=>{
    sethide(true)
  }

  return (
    <header className='header' id='header'>
        <nav className='nav container'>
          <Link href='#'><img src={logo} className='nav-logo' alt='logo'/></Link>  
          <div className={`nav-menu ${ condition }`} id='nav-menu'>
             <ul className={`nav-list querystyle`}>
                <li className='nav-item '><Link  activeClass="active" spy={true} smooth={true} offset={-150} duration={500} onClick={hideState }  className= 'nav-links querystyle'  to='home' >Home</Link> </li>
                <li className='nav-item'><Link spy={true} smooth={true} offset={-50} duration={500} onClick={hideState } className='nav-links querystyle ' to='specs'>Specs</Link> </li>
                <li className='nav-item'><Link spy={true} smooth={true} offset={-50} duration={500} onClick={hideState }  className='nav-links querystyle 'to='case'>Case</Link></li>
                <li className='nav-item'> <Link  spy={true} smooth={true} offset={-10} duration={500} onClick={hideState }  className='nav-links querystyle 'to='products'>Products</Link></li>
             </ul>
             <div onClick={hideState} className={`nav-close  querystyle`} id='nav-close'>
                <i class="uil uil-times"></i>
             </div>
          </div>
         
          <div onClick={showState} className='nav-toggle' id='nav-toggle'>
            <i class="uil uil-apps"></i>
          </div>
        </nav>
    </header>
  )
}

export default Header
