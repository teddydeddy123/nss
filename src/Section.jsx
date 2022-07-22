import React from 'react'
import interior3 from './img/interior3.jpg'
import interiordesign from './img/Interior-design.jpg'
import interior2 from './img/interior2.jpg'

export default function Section() {

    return (
        <section>
            <div className='section-2-div-1'>
                <div>
                    <p>LONDON COLLECTION SEASON</p>
                    <h3>Temporary Store</h3>
                    <p>On the other hand, we denounce with righteous 
indignation and dislike men who are so beguiled and 
demoralized by the charms of pleasure of the moment, 
so blinded by desire</p>    
                    <button >View</button>
                </div>
                <div>
                    <img className='img-1' src={interiordesign} alt='text' />
                </div>
            </div>
            
            <div className='section-2-div-2'>
            <div>
                    <img className='img-2' src={interior3} alt='text'/>
                </div>
                <div>
                    <p>LONDON COLLECTION SEASON</p>
                    <h3>New Collection <br/> Henry London</h3>
                    <p>On the other hand, we denounce with righteous 
indignation and dislike men who are so beguiled and 
demoralized by the charms of pleasure of the moment, 
so blinded by desire</p>    
                    <button >View</button>
                </div>
            </div>

            <div className='section-2-div-3'>
            <h2>Press from <br/> Watch Lab Studio</h2>
            <div className='section-2-flexbox'>
                <div>
                    <p>On the other hand, we denounce with 
righteous indignation and dislike men 
who are so beguiled and demoralized 
by the charms of pleasure of the 
moment, so blinded by desire, that 
they cannot foresee the pain trouble </p>
                    </div>
                    <div>
                        <img src={interior2} alt='text'/>
                    </div>
                    <div>
                        <p> <b>Press </b><span> <br />18 SETTEMBRE 2021</span></p>
                        <h4>Most Important <br/>Days on Watchlab</h4>
                    </div>
                    </div>
                    
            </div>

        </section>
    )
}