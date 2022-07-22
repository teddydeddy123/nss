import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='footer-up'>
                <h2>Get in Touch</h2>
                <p>DISCOVER MORE ABOUT NEWS, <br/> EXCLUSIVE EVENTS AND DISCOUNTS</p>
                <div className='email-bar'>
                <input type="email" id="ok" placeholder='Email'></input>
                </div>
            </div>
            
            <div className='footer-down'>
            <div>
                <h2 class="footer-h2"> WATCH/LAB  </h2>
                <p>Watch/Lab <span>Innovation brings success</span></p>
                <p>via Borgogna 5, Milan </p>
                <p>Italy </p>

            </div>

            <div>
                <table>
                    <tbody>
                

                    <tr>
                        <td>About us</td>
                        <td>Press</td>
                        <td>+39756382734</td>
                    </tr>

                    <tr>
                        <td>Brand</td>
                        <td>Contacts</td>
                        <td>M. watchlab@gmail.com</td>
                    </tr>
                    
                    

                    <tr>
                        <td>Projects</td>
                        <td>Privacy Policy</td>
                        <td>FACEBOOK</td>
                    </tr>

                    <tr>
                        <td>Magazine</td>
                        <td>Search</td>
                        <td>INSTAGRAM</td>

                    
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>

        </footer>
    )
}