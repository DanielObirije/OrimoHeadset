import React from 'react'
import Logo from '../img/logo.png'

function footer() {
  return (
    <footer className="footer section">
            <div className="footer__container container grid">
                <a href="#" className="footer__logo">
                    <img src={Logo} alt=""/>
                </a>
    
                <div className="footer__content">
                    <h3 className="footer__title">Products</h3>
    
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Headphones</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Earphones</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Earbuds</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Accesories</a>
                        </li>
                    </ul>
                </div>
    
                <div className="footer__content">
                    <h3 className="footer__title">Support</h3>
    
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Product help</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Register</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Updates</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Provides</a>
                        </li>
                    </ul>
                </div>
    
                <div className="footer__content">
                    <form action="" className="footer__form">
                        <input type="email" placeholder="Email" className="footer__input"/>
                        <button className="button-cart button--flex">
                        <i class="uil uil-telegram-alt button--icon"></i> Subscribe
                        </button>
                    </form>
    
                    <div className="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                           <i class="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                            <i class="uil uil-instagram"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                            <i class="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                </div>
            </div>

            <p className="footer__copy">
                <a href="https://www.youtube.com/c/Bedimcode/" target="_blank" className="footer__copy-link">&#169; codex. All right reserved</a>
            </p>
        </footer>
  )
}

export default footer
