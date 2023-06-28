import React from 'react'
import Case from '../img/case.png'
function Forth() {
  return (
    <section class="case section grid" id="case">
        <h2 className="section_title section-title-gradents">Case</h2>

       <div className="case__container container grid">
            <div>
                <img src={Case} alt="case" className="case__img"/>
            </div>

            <div className="case__data">
                <p className="case__description">With a comfortable and adaptable case so that you can 
                    store it whenever you want, and keep your durability forever.
                </p>
                <button className="button button--flex">
                   <i class="uil uil-info-circle info-img"></i> More info
                </button>
                
            </div>
      </div>

    </section>
  )
}

export default Forth
