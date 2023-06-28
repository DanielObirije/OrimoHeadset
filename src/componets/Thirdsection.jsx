import React from 'react'
import headset from '../img/specs.png'

function Thirdsection() {
  return (
    <section className="specs section grid" id="specs">
                <h2 className="section_title section-title-gradents">Specs</h2>

                <div className="specs__container container grid">
                    <div className="specs__content grid">
                        <div className="specs__data ">
                            <i class="uil uil-bluetooth-b"></i>
                            <h3 className="specs__title">Connection</h3>
                            <span className="specs__subtitle">Bluetooth v5.2</span>
                        </div>
    
                        <div className="specs__data">
                           <i class="uil uil-battery-bolt"></i>
                            <h3 className="specs__title">Battery</h3>
                            <span className="specs__subtitle">Duration 40h</span>
                        </div>
    
                        <div className="specs__data">
                            <i class="uil uil-plug"></i>
                            <h3 className="specs__title">Load</h3>
                            <span className="specs__subtitle">Fast charge 4.2-AAC</span>
                        </div>
    
                        <div className="specs__data">
                            <i class="uil uil-microphone"></i>
                            <h3 className="specs__title">Microphone</h3>
                            <span className="specs__subtitle">Supports Apple Siri <br/> and Google</span>
                        </div>
                    </div>
                    
                    <div>
                        <img src={headset} alt="headset" className="specs__img"/>
                    </div>
                </div>
            </section>
  )
}

export default Thirdsection
