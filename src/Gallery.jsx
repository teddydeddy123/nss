import React from 'react'
import interior4 from './img/interior4.jpg'
import interior5 from './img/interior5.webp'
import interior6 from './img/interior6.webp'
import interior7 from './img/interior7.jpg'
import interior8 from './img/interior8.jpg'


export default function Gallery() {
    return (
        <section className='gallery'>
            <div>
                <img src={interior4} alt='alt'/>
            </div>
            <div className='gallery-small'>
                <img src={interior5} alt='alt'/>
                <img alt='text' src={interior6}/>
                <img alt='text' src={interior7} />
                <img alt='text' src={interior8}/>
            </div>
        </section>


    )
}