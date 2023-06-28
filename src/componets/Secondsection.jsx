import React from 'react'
import sponsor1 from '../img/sponsor1.png'
import sponsor2 from '../img/sponsor2.png'
import sponsor3 from '../img/sponsor3.png'
import sponsor4 from '../img/sponsor4.png'
function Secondsection() {
  return (
    <section className="sponsor section">
       <div className="sponsor__container container grid">
          <img src={sponsor1} alt="sponsor1" className="sponsor__img"/>
          <img src={sponsor2} alt="sponsor2" className="sponsor__img"/>
          <img src={sponsor3} alt="sponsor3" className="sponsor__img"/>
          <img src={sponsor4} alt="sponsor4" className="sponsor__img"/>
       </div>
    </section>
  )
}

export default Secondsection
