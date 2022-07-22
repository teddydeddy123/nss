import React from 'react'
import search from './img/search.svg'

export default function Navbar() {
return (
    <nav>
        <p className='logo'>WATCH/LAB</p>
        <ul>
            <li>ABOUT</li>
            <li>BRAND</li>
            <li>PROJECTS</li>
            <li>MAGAZINE</li>
            <li>PRESS</li>
            <li>CONTACTS</li>
        </ul>
        <input type='search' id='search'></input> <label for="search"><img src={search}/></label>
        
    </nav>
)
}