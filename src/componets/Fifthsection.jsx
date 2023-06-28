import React from 'react'
import Set from '../img/discount.png'
function Fifthsection() {
  return (
    <section className="discount section">
                <div className="discount__container container grid">
                    <div className="discount-animate">
                        <h2 className="discount-title">Immerse yourself in <br/> your music</h2>
                        <p className="discount-description">Get it now, up to 50% off.</p>
                        <button className="button button--flex ">
                        <i class="uil uil-shopping-bag button--icon"></i> Shop Now
                        </button>
                    </div>

                  <img src={Set} alt="set" className="discount__img"/>

                </div>
     </section>
  )
}

export default Fifthsection
