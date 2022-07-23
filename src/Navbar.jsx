import React, {useState} from 'react'
import search from './img/search.svg'


export default function Navbar() {

const[open, setOpen]= useState(true);

return (
    <nav>
        <p className='logo'>WATCH/LAB</p>
        {open && <ul id='nav-list'>
            <li>ABOUT</li>
            <li>BRAND</li>
            <li>PROJECTS</li>
            <li>MAGAZINE</li>
            <li>PRESS</li>
            <li>CONTACTS</li>
        </ul>}
        {open && <input type='search' id='search'></input> }<label for="search"><img src={search} alt='search'/></label>

        <div className='ham' onClick={() => setOpen(!open)}>
        <div className='ham-line'></div>
        <div className='ham-line'></div>
        <div className='ham-line'></div>
        </div>
        
    </nav>
)
}